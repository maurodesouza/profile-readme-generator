import { HTMLMotionProps } from 'framer-motion';

import { variants } from './animations';
import * as S from './styles';

type TechIconProps = HTMLMotionProps<'div'> & {
  label?: string;
  display: string;
};

const DisplayBlock = ({ label, display, ...rest }: TechIconProps) => {
  return (
    <S.Container variants={variants.container} {...rest}>
      <S.Wrapper>
        <S.Image alt={`${label} logo`} src={display} />

        {label}
      </S.Wrapper>
    </S.Container>
  );
};

export { DisplayBlock };
