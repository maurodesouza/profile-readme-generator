import { Reorder } from 'framer-motion';

import { Item } from './item';
import { Panel } from 'components/ui/primitives/atoms/panel';

import { useCanvas } from 'hooks';
import { events } from '@events';

export function ReorderSections() {
  const { sections } = useCanvas();

  return (
    <Panel.Scrollable>
      <Reorder.Group
        axis="y"
        values={sections.map(section => section.id)}
        onReorder={events.canvas.reorder}
      >
        {sections.map((section, index) => {
          return (
            <Item
              key={section.id}
              data={section}
              first={index === 0}
              last={sections.length === index + 1}
            />
          );
        })}
      </Reorder.Group>
    </Panel.Scrollable>
  );
}
