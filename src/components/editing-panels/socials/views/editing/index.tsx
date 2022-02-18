import { useRef } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { EditSocialItem, EditSocialItemRef, GroupFields } from 'components';
import { useCanvas, useForceUpdate } from 'hooks';

import { events } from '@events/base';
import { getDeepObjectProperty } from 'utils';

import { variants } from './animations';

import { fields } from './fields';
import * as S from './styles';

type Social = {
  icon: string;
};

type Socials = {
  [key: string]: Social;
};

const Editing = () => {
  const techIconVariantsRefs = useRef<EditSocialItemRef[]>([]);

  const forceUpdate = useForceUpdate();
  const { currentSection } = useCanvas();

  const selectedSocials = getDeepObjectProperty<Socials>(
    currentSection,
    'props.content.socials'
  );

  const socials = Object.entries(selectedSocials);
  const socials_names = socials.map(tech => tech[0]);

  const handleOnReOrder = (order: typeof socials_names) => {
    const path = 'content.socials';

    const value = order.reduce((obj, name) => {
      const finded = socials.find(tech => tech[0] === name)!;

      obj[finded[0]] = finded[1];

      return obj;
    }, {} as Socials);

    events.canvas.edit({ path, value });
    setTimeout(forceUpdate, 200);
  };

  return (
    <S.Container
      initial="closed"
      animate="open"
      variants={variants.container}
      layoutScroll
    >
      {fields.map(field => (
        <GroupFields key={field.id} {...field} />
      ))}

      <AnimatePresence>
        <Reorder.Group
          axis="y"
          values={socials_names}
          onReorder={handleOnReOrder}
        >
          {socials.map(([tech, props], index) => (
            <EditSocialItem
              key={tech}
              ref={ref => (techIconVariantsRefs.current[index] = ref!)}
              refs={techIconVariantsRefs.current}
              tech={tech}
              {...props}
            />
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </S.Container>
  );
};

export { Editing };
