import { HTMLMotionProps } from 'framer-motion';
import { getTechIconUrl } from 'utils';

import { variants } from './animations';
import * as S from './styles';

type TechIconProps = HTMLMotionProps<'div'> & {
  name: string;
  short_name?: string;
  icon: string;
  displayName?: boolean;
};

const TechIcon = ({
  name,
  short_name,
  icon,
  displayName = true,
  ...rest
}: TechIconProps) => {
  return (
    <S.Container variants={variants.container} {...rest}>
      <S.Wrapper>
        <S.Image alt={`${name} logo`} src={getTechIconUrl(name, icon)} />

        {displayName && (short_name || name)}
      </S.Wrapper>
    </S.Container>
  );
};

export { TechIcon };
