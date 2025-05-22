import { useEffect, useRef } from 'react';
import { IconName } from 'lucide-react/dynamic';

import { events } from 'app';
import { DefaultContextMenuProps } from '../base';

import { actions } from './actions';
import * as S from './styles';
import { Icon } from 'components/ui/primitives/atoms/icon';

type SectionContextMenuProps = DefaultContextMenuProps;

const SectionContextMenu = ({ event }: SectionContextMenuProps) => {
  const sectionIdRef = useRef<string>();

  const canShow = () => {
    const range = 5;

    let sectionId = '';
    let currentElement = event.target as HTMLElement;
    let currentIndex = 0;

    while (!sectionId && currentIndex < range) {
      sectionId = currentElement.getAttribute('data-sectionid') || '';
      if (!sectionId && currentElement.parentElement) {
        currentElement = currentElement.parentElement;
      }
      currentIndex += 1;
    }

    if (sectionId) sectionIdRef.current = sectionId;
    else events.contextmenu.close();
  };

  useEffect(() => {
    canShow();
  }, [event]);

  return (
    <S.Container>
      {actions.map(({ label, icon, action, ...rest }) => (
        <S.Action
          key={label}
          onClick={() => [
            action(sectionIdRef.current!),
            events.contextmenu.close(),
          ]}
          {...rest}
        >
          {label}

          <S.WrapperIcon>
            <Icon name={icon as IconName} />
          </S.WrapperIcon>
        </S.Action>
      ))}
    </S.Container>
  );
};

export { SectionContextMenu };
