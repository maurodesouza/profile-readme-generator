import { useRef } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { EditSocialItem, EditSocialItemRef, GroupFields } from 'components';
import { useCanvas, useForceUpdate } from 'hooks';

import { events } from 'app';
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
  const EditSocialItemRefs = useRef<EditSocialItemRef[]>([]);

  const forceUpdate = useForceUpdate();
  const { currentSection } = useCanvas();

  const selectedSocials = getDeepObjectProperty<Socials>(
    currentSection,
    'props.content.socials'
  );

  const socials = Object.entries(selectedSocials);
  const socials_names = socials.map(social => social[0]);

  const handleOnReOrder = (order: typeof socials_names) => {
    const path = 'content.socials';

    const value = order.reduce((obj, name) => {
      const finded = socials.find(social => social[0] === name)!;

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
          {socials.map(([social, props], index) => (
            <EditSocialItem
              key={social}
              ref={ref => (EditSocialItemRefs.current[index] = ref!)}
              refs={EditSocialItemRefs.current}
              social={social}
              {...props}
            />
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </S.Container>
  );
};

export { Editing };
