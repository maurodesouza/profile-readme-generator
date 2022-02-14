import {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
  useEffect,
} from 'react';
import { useDragControls, usePresence } from 'framer-motion';

import { Menu } from '@styled-icons/feather';

import { events } from '@events/base';
import { TechIcon } from 'components';

import { getTechIconUrl } from 'utils';
import { tech_icons } from 'resources';

import { variants, animations } from './animations';
import * as S from './styles';

type TechIconVariantsProps = {
  tech: string;
  icon: string;
  short_name?: string;
  refs: TechIconVariantsRef[];
};

export type TechIconVariantsRef = {
  closeVariants: () => void;
};

const TechIconVariants: React.ForwardRefRenderFunction<
  TechIconVariantsRef,
  TechIconVariantsProps
> = ({ tech, icon, short_name, refs }, ref) => {
  const iconContainerRef = useRef<HTMLDivElement>(null);

  const dragControls = useDragControls();
  const [isPresent, safeToRemove] = usePresence();

  const [isOpenVariants, setIsOpenVariants] = useState(false);

  const getTechIcons = () => {
    const finded = tech_icons.find(icon => icon.name === tech);

    return finded?.icons || [];
  };

  const handleToggleVariants = () => {
    if (!isOpenVariants) refs.forEach(item => item?.closeVariants());

    setIsOpenVariants(!isOpenVariants);
  };

  const handleChangeTechIcon = (icon: string) => () => {
    const path = `content.techs.${tech}.icon`;

    events.canvas.edit({ path, value: icon });
  };

  const handleDeleteTech = () => {
    const path = `content.techs.${tech}`;

    events.canvas.edit({ path, value: undefined });
  };

  const handleCloseVariants = () => setIsOpenVariants(false);

  useImperativeHandle(
    ref,
    () => ({
      closeVariants: handleCloseVariants,
    }),
    []
  );

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove!, 1000);
  }, [isPresent]);

  const icons = getTechIcons();
  const hasIcons = icons.length > 1;

  const height = iconContainerRef.current?.offsetHeight || 0;

  return (
    <S.Container
      value={tech}
      variants={variants.container}
      dragListener={false}
      dragControls={dragControls}
      layout
      {...animations.container}
    >
      <S.Content>
        <S.Drag
          onPointerDown={event => [
            handleCloseVariants(),
            dragControls.start(event),
          ]}
        >
          <Menu />
        </S.Drag>

        <S.Logo
          key={`${tech} ${icon}`}
          alt={`${tech} ${icon} logo`}
          src={getTechIconUrl(tech, icon)}
        />

        <S.Wrapper>
          <S.Name>{short_name || tech}</S.Name>

          <S.DeleteIcon size={16} onClick={handleDeleteTech} />
        </S.Wrapper>

        {hasIcons && (
          <S.ShowMore onClick={handleToggleVariants}>
            {isOpenVariants ? 'Esconder' : 'Mostrar'} variantes
          </S.ShowMore>
        )}
      </S.Content>

      <S.Grow
        initial={false}
        animate={isOpenVariants ? 'open' : 'closed'}
        variants={variants.icons_container(height)}
      >
        <S.Icons ref={iconContainerRef}>
          {icons.map(icon => (
            <TechIcon
              key={`${tech} ${icon}`}
              name={tech}
              icon={icon}
              displayName={false}
              onClick={handleChangeTechIcon(icon)}
            />
          ))}
        </S.Icons>
      </S.Grow>
    </S.Container>
  );
};

const TechIconVariantsFoward = forwardRef(TechIconVariants);
export { TechIconVariantsFoward as TechIconVariants };
