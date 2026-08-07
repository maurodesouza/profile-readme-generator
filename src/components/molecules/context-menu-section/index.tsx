'use client';

import { useTranslations } from 'next-intl';

import { observer } from 'mobx-react-lite';

import { IconName } from 'lucide-react/dynamic';

import { actions } from './actions';

import { Icon } from '#/components/atoms/icon';
import { ContextMenu } from '#/components/atoms/context-menu';

import { useCanvas } from '#/hooks';
import { actions as commandActions } from '#/lib/command';

type SectionContextMenuProps = {
  id: string;
};

export const SectionContextMenu = observer(function SectionContextMenu(
  props: SectionContextMenuProps
) {
  const tFields = useTranslations('fields');
  const tUi = useTranslations('ui');
  const canvasStore = useCanvas();

  const sectionIndex = canvasStore.sections.findIndex(
    section => section.id === props.id
  );

  const isFirst = sectionIndex === 0;
  const isLast = sectionIndex + 1 === canvasStore.sections.length;

  const translate = (value: string) => {
    const slugKey = value
      .replace(/__dot__/g, '.')
      .replace(/\./g, '-dot-')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()
      .replace(/_/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');

    return tFields(slugKey) as string;
  };

  return (
    <ContextMenu.Content>
      {actions.map(({ label, icon, action, ...rest }) => {
        return (
          <ContextMenu.Item
            key={label}
            onClick={() => action(props.id)}
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
        onClick={() => commandActions.canvas.section.moveUp(props.id)}
        disabled={isFirst}
      >
        <Icon name="arrow-up" />
        {tUi('context-menu.up')}
      </ContextMenu.Item>

      <ContextMenu.Item
        onClick={() => commandActions.canvas.section.moveDown(props.id)}
        disabled={isLast}
      >
        <Icon name="arrow-down" />
        {tUi('context-menu.down')}
      </ContextMenu.Item>
    </ContextMenu.Content>
  );
});
