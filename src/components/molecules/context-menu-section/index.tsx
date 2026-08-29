'use client';

import { useTranslations } from 'next-intl';

import { observer } from 'mobx-react-lite';

import { IconName } from 'lucide-react/dynamic';

import { actions } from './actions';

import { Icon } from '#/components/atoms/icon';
import { ContextMenu } from '#/components/atoms/context-menu';

import { useCanvas, useTranslateField } from '#/hooks';
import { actions as commandActions } from '#/lib/command';

type SectionContextMenuProps = {
  id: string;
};

export const SectionContextMenu = observer(function SectionContextMenu(
  props: SectionContextMenuProps
) {
  const tUi = useTranslations('ui');
  const translate = useTranslateField();
  const canvasStore = useCanvas();

  const sectionIndex = canvasStore.sections.findIndex(
    section => section.id === props.id
  );

  const isFirst = sectionIndex === 0;
  const isLast = sectionIndex + 1 === canvasStore.sections.length;

  return (
    <ContextMenu.Content>
      {actions.map(({ label, icon, action, className, ...rest }) => {
        return (
          <ContextMenu.Item
            key={label}
            soft={!className}
            onClick={() => action(props.id)}
            className={className}
            {...rest}
          >
            <Icon name={icon as IconName} />

            {translate(label)}
          </ContextMenu.Item>
        );
      })}

      <ContextMenu.Separator />
      <ContextMenu.Label>{tUi('context-menu.move')}</ContextMenu.Label>
      <ContextMenu.Separator />

      <ContextMenu.Item
        soft
        onClick={() => commandActions.canvas.section.moveUp(props.id)}
        disabled={isFirst}
      >
        <Icon name="arrow-up" />
        {tUi('context-menu.up')}
      </ContextMenu.Item>

      <ContextMenu.Item
        soft
        onClick={() => commandActions.canvas.section.moveDown(props.id)}
        disabled={isLast}
      >
        <Icon name="arrow-down" />
        {tUi('context-menu.down')}
      </ContextMenu.Item>
    </ContextMenu.Content>
  );
});
