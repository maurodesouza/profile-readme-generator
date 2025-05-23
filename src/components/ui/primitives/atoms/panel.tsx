import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Icon } from './icon';

import { events } from 'app';
import { panels } from 'components/panels/panels';
import { useExtensions, useOutsideClick, useMediaQuery } from 'hooks';

import { PanelsEnumType, PanelSide } from 'types';
import { cn, getPanelSideEvent, twx } from 'utils';

type PanelContextState = {
  isOpen: boolean;
  side: PanelSide;
  panel?: PanelsEnumType;
};

const PanelContext = createContext<PanelContextState>({} as PanelContextState);

type PanelProviderProps = {
  side: PanelSide;
  initialPanel?: PanelsEnumType;
};

function usePanel() {
  const context = useContext(PanelContext);

  if (!context)
    throw Error(
      'You need to be inside the PanelContext component to use the usePanel hook.'
    );

  return context;
}

function PanelProvider(props: React.PropsWithChildren<PanelProviderProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [panel, setPanel] = useState<PanelsEnumType | undefined>(
    props.initialPanel
  );

  function onShowPanel(event: CustomEvent<PanelsEnumType>) {
    setPanel(event.detail);
    setIsOpen(true);
  }

  function onClearPanel() {
    setPanel(undefined);
  }

  function onOpenPanel() {
    setIsOpen(true);
  }

  function onClosePanel() {
    setIsOpen(false);
  }

  useEffect(() => {
    const { showEvent, clearEvent, openEvent, closeEvent } = getPanelSideEvent(
      props.side
    );

    events.on(showEvent, onShowPanel);
    events.on(clearEvent, onClearPanel);
    events.on(openEvent, onOpenPanel);
    events.on(closeEvent, onClosePanel);

    return () => {
      events.off(showEvent, onShowPanel);
      events.off(clearEvent, onClearPanel);
      events.off(openEvent, onOpenPanel);
      events.off(closeEvent, onClosePanel);
    };
  }, []);

  return (
    <PanelContext.Provider
      value={{
        side: props.side,
        panel,
        isOpen,
      }}
      {...props}
    />
  );
}

function PanelContainer(props: React.PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);

  const breakpoint = useMemo(() => {
    if (typeof getComputedStyle === 'undefined') return '0px';

    const styles = getComputedStyle(document.documentElement);
    return styles.getPropertyValue('--breakpoint-laptop');
  }, []);

  const [isLessThanLaptop] = useMediaQuery(`(max-width: ${breakpoint})`);

  const { isOpen, side } = usePanel();

  useOutsideClick(
    containerRef,
    () => {
      events.panel.close(side);
    },
    isLessThanLaptop && isOpen
  );

  return (
    <div
      className={cn(
        'w-0 max-w-0 h-full relative laptop:w-full laptop:max-w-panel'
      )}
      ref={containerRef}
      {...props}
    />
  );
}

function PanelWrapper(props: React.PropsWithChildren) {
  const { isOpen, side } = usePanel();

  return (
    <div
      className={cn(
        `absolute top-0 w-panel h-full bg-background-default p-md rounded-md box-border z-10 laptop:shadow-none`,
        side === 'left' ? 'left-0' : 'right-0',
        isOpen
          ? `shadow-panel-${side}`
          : 'max-laptop:border-none max-laptop:-z-10 max-laptop:shadow-none'
      )}
      {...props}
    />
  );
}

function PanelContent(props: React.PropsWithChildren) {
  const { isOpen } = usePanel();

  return (
    <div
      className={cn(
        'w-full h-full',
        !isOpen && 'max-laptop:opacity-0 max-laptop:overflow-hidden'
      )}
      {...props}
    />
  );
}

const Scrollable = twx.div`h-full w-[calc(100%_+_var(--spacing-md))] pr-xs overflow-y-scroll scrollbar`;

function PanelRender() {
  const { panel } = usePanel();
  const { extensions } = useExtensions();

  const allPanels = useMemo(
    () => ({
      ...panels,
      ...(extensions.panels ?? {}),
    }),
    [extensions]
  );

  const Panel = allPanels[panel!] || React.Fragment;

  return <Panel />;
}

const percentageMap = {
  left: '70%',
  right: '-70%',
};

function PanelToggle() {
  const { side, isOpen } = usePanel();

  const percentage = percentageMap[side];
  const isLeft = side === 'left';

  function togglePanel() {
    const method = isOpen ? 'close' : 'open';

    events.panel[method](side);
  }

  function getBorderClasses() {
    if (isLeft) return 'pr-0 !border-r-0 !rounded-tr-none !rounded-br-none';

    return 'pl-0 !border-l-0 !rounded-tl-none !rounded-bl-none';
  }

  function getPositionClasses() {
    if (isOpen) return isLeft ? '-right-panel' : '-left-panel';

    return isLeft ? 'right-[-5px]' : 'left-[-5px]';
  }

  return (
    <button
      onClick={togglePanel}
      aria-label={`Toggle ${side} panel`}
      style={{
        transform: isOpen ? `translateX(${percentage})` : 'rotate(180deg)',
      }}
      className={cn(
        'absolute grid place-items-center top-md !bg-background-default box-border rounded-md p-[calc(var(--spacing-xs)_/_2)] z-20 laptop:hidden',

        getPositionClasses(),
        !isOpen && getBorderClasses()
      )}
    >
      <Icon name={`chevron-${side}`} size={24} className="!cursor-pointer" />
    </button>
  );
}

type FullPanelTemplateProps = PanelProviderProps;

function FullPanelTemplate(props: FullPanelTemplateProps) {
  return (
    <PanelProvider {...props}>
      <PanelContainer>
        <PanelToggle />

        <PanelWrapper>
          <PanelContent>
            <PanelRender />
          </PanelContent>
        </PanelWrapper>
      </PanelContainer>
    </PanelProvider>
  );
}

export const Panel = {
  Template: {
    Full: FullPanelTemplate,
  },

  Provider: PanelProvider,

  Container: PanelContainer,
  Wrapper: PanelWrapper,
  Content: PanelContent,
  Scrollable,

  Render: PanelRender,
  Toggle: PanelToggle,
};
