import {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
  useEffect,
} from 'react';
import { usePresence } from 'framer-motion';

import { events } from '@events/base';
import { TechIcon } from 'components';

import { getTechIconUrl } from 'utils';
import { tech_icons } from 'resources';

import { variants } from './animations';
import * as S from './styles';

type TechIconVariantsProps = {
  tech: string;
  icon: string;
  refs: TechIconVariantsRef[];
};

export type TechIconVariantsRef = {
  closeVariants: () => void;
};

const TechIconVariants: React.ForwardRefRenderFunction<
  TechIconVariantsRef,
  TechIconVariantsProps
> = ({ tech, icon, refs }, ref) => {
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const [isOpenVariants, setIsOpenVariants] = useState(false);

  const [isPresent, safeToRemove] = usePresence();

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

  useImperativeHandle(
    ref,
    () => ({
      closeVariants: () => setIsOpenVariants(false),
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
      variants={variants.container}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
    >
      <S.Content>
        <S.Logo
          key={`${tech} ${icon}`}
          alt={`${tech} ${icon} logo`}
          src={getTechIconUrl(tech, icon)}
        />

        <S.Wrapper>
          <S.Name>{tech}</S.Name>

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
