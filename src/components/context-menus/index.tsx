import { useEffect, useRef, useState, MouseEvent } from 'react';

import { BaseContextMenu } from './base';
import { ContextMenus, Events } from 'types';
import { events } from '@events/index';

import { contextMenusMap } from './contexts';

import * as S from './styles';
import { AnimatePresence } from 'framer-motion';

type HandleChangePayload = {
  context: ContextMenus;
  event: MouseEvent;
};

const ContextMenu = () => {
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const [context, setContext] = useState<ContextMenus>();
  const [eventProps, setEventProps] = useState<MouseEvent>();

  const handleChange = (customEvent: CustomEvent<HandleChangePayload>) => {
    const { context, event } = customEvent.detail;

    event.preventDefault();
    event.stopPropagation();

    setEventProps(event);
    setContext(context);

    events.on('click', checkIdfCanCloseContext);
  };

  const handleClose = () => {
    setContext(undefined);
    setEventProps(undefined);

    events.off('click', checkIdfCanCloseContext);
  };

  const checkIdfCanCloseContext = (e: MouseEvent) => {
    const contextElement = contextMenuRef.current;

    if (contextElement?.contains(e.target as Node)) return;

    handleClose();
  };

  useEffect(() => {
    events.on(Events.CONTEXT_MENU_OPEN, handleChange);
    events.on(Events.CONTEXT_MENU_CLOSE, handleClose);

    return () => {
      events.off(Events.CONTEXT_MENU_OPEN, handleChange);
      events.off(Events.CONTEXT_MENU_CLOSE, handleClose);

      events.off('click', checkIdfCanCloseContext);
    };
  }, []);

  const ContextMenu = contextMenusMap[context!];
  const { pageX = 0, pageY = 0 } = eventProps || {};

  return (
    <AnimatePresence>
      {!!ContextMenu && (
        <S.Container
          x={pageX + 15}
          y={pageY + 15}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 5 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.25 }}
        >
          <BaseContextMenu ref={contextMenuRef}>
            <ContextMenu event={eventProps!} />
          </BaseContextMenu>
        </S.Container>
      )}
    </AnimatePresence>
  );
};

export { ContextMenu };
