import { useRef } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { GroupFields } from 'components';
import {
  IconEditor,
  IconEditorRef,
} from 'components/ui/primitives/compound/icon-editor';
import { Panel } from 'components/ui/primitives/atoms/panel';

import { events } from '@events';
import { useCanvas, useForceUpdate } from 'hooks';
import { getDeepObjectProperty, getSocialImgUrl } from 'utils';

import { fields, getIconFields } from './fields';

type Social = {
  icon: string;
  short_name?: string;
};

type Socials = {
  [key: string]: Social;
};

export function Editing() {
  const iconEditorRefs = useRef<IconEditorRef[]>([]);

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
          {socials.map(([social, props], index) => {
            const { icon, short_name } = props;

            return (
              <IconEditor
                key={social}
                id={social}
                label={short_name ?? social}
                baseEditPath="content.socials"
                img={{
                  alt: `${social} ${icon} logo`,
                  url: getSocialImgUrl('icon', social, { icon }),
                }}
                slots={{
                  expansibleContent: () => (
                    <>
                      {getIconFields(social).map(group => (
                        <GroupFields key={group.id} {...group} />
                      ))}
                    </>
                  ),
                }}
                ref={ref => {
                  iconEditorRefs.current[index] = ref!;
                }}
                refs={iconEditorRefs.current}
              />
            );
          })}
        </Reorder.Group>
      </AnimatePresence>
    </Panel.Scrollable>
  );
}
