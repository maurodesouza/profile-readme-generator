import { useRef } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { Panel } from 'components/ui/primitives/atoms/panel';
import { EditSocialItem, EditSocialItemRef, GroupFields } from 'components';

import { events } from 'app';
import { getDeepObjectProperty } from 'utils';
import { useCanvas, useForceUpdate } from 'hooks';

import { fields } from './fields';

type Social = {
  icon: string;
};

type Socials = {
  [key: string]: Social;
};

export function Editing() {
  const EditSocialItemRefs = useRef<EditSocialItemRef[]>([]);

  const forceUpdate = useForceUpdate();
  const { currentSection } = useCanvas();

  const selectedSocials = getDeepObjectProperty<Socials>(
    currentSection,
    'props.content.socials'
  )!;

  const socials = Object.entries(selectedSocials);
  const socials_names = socials.map(social => social[0]);

  function onReOrder(order: typeof socials_names) {
    const path = 'content.socials';

    const value = order.reduce((obj, name) => {
      const finded = socials.find(social => social[0] === name)!;

      obj[finded[0]] = finded[1];

      return obj;
    }, {} as Socials);

    events.canvas.edit({ path, value });
    setTimeout(forceUpdate, 200);
  }

  return (
    <Panel.Scrollable>
      {fields.map(field => (
        <GroupFields key={field.id} {...field} />
      ))}

      <AnimatePresence>
        <Reorder.Group axis="y" values={socials_names} onReorder={onReOrder}>
          {socials.map(([social, props], index) => (
            <EditSocialItem
              key={social}
              ref={ref => {
                EditSocialItemRefs.current[index] = ref!;
              }}
              refs={EditSocialItemRefs.current}
              social={social}
              {...props}
            />
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </Panel.Scrollable>
  );
}
