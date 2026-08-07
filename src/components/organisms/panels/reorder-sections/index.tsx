'use client';

import { observer } from 'mobx-react-lite';

import { Reorder } from 'framer-motion';

import { Item } from './item';
import { Panel } from '#/components/organisms/panel';

import { useCanvas } from '#/hooks';
import { actions } from '#/lib/command';

export const ReorderSections = observer(function ReorderSections() {
  const canvasStore = useCanvas();

  return (
    <Panel.Scrollable>
      <Reorder.Group
        axis="y"
        values={canvasStore.sections.map(section => section.id)}
        onReorder={actions.canvas.sections.reorder}
      >
        {canvasStore.sections.map((section, index) => {
          return (
            <Item
              key={section.id}
              data={section}
              first={index === 0}
              last={canvasStore.sections.length === index + 1}
            />
          );
        })}
      </Reorder.Group>
    </Panel.Scrollable>
  );
});
