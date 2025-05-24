import { useRef } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { Panel } from 'components/ui/primitives/atoms/panel';
import { GroupFields, TechIconVariants, TechIconVariantsRef } from 'components';

import { events } from 'app';
import { getDeepObjectProperty } from 'utils';
import { useCanvas, useForceUpdate } from 'hooks';

import { fields } from './fields';
import { EditableIcon } from 'types';

type Icons = {
  [key: string]: EditableIcon;
};

export function Editing() {
  const techIconVariantsRefs = useRef<TechIconVariantsRef[]>([]);

  const forceUpdate = useForceUpdate();
  const { currentSection } = useCanvas();

  const selectedIcons = getDeepObjectProperty<Icons>(
    currentSection,
    'props.content.icons'
  )!;

  const icons = Object.entries(selectedIcons);
  const icon_names = icons.map(icon => icon[0]);

  function onReOrder(order: typeof icon_names) {
    const path = 'content.icons';

    const value = order.reduce((obj, name) => {
      const finded = icons.find(icon => icon[0] === name)!;

      obj[finded[0]] = finded[1];

      return obj;
    }, {} as Icons);

    events.canvas.edit({ path, value });
    setTimeout(forceUpdate, 200);
  }

  return (
    <Panel.Scrollable>
      {fields.map(field => (
        <GroupFields key={field.id} {...field} />
      ))}

      <AnimatePresence>
        <Reorder.Group axis="y" values={icon_names} onReorder={onReOrder}>
          {icons.map(([name, props], index) => (
            <TechIconVariants
              key={name}
              ref={ref => {
                techIconVariantsRefs.current[index] = ref!;
              }}
              refs={techIconVariantsRefs.current}
              {...props}
            />
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </Panel.Scrollable>
  );
}
