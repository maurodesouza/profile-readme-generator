import { HTMLMotionProps } from 'framer-motion';

import { variants } from './animations';
import * as S from './styles';

type TechIconProps = HTMLMotionProps<'div'> & {
  label?: string;
  display: string;
  imgWidth?: string;
  imgHeight?: string;
};

const DisplayBlock = ({
  label,
  display,
  imgWidth = '40%',
  imgHeight = '40%',
  ...rest
}: TechIconProps) => {
  return (
    <S.Container variants={variants.container} {...rest}>
      <S.Wrapper>
        <S.Image
          alt={`${label} logo`}
          src={display}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        />

        {label}
      </S.Wrapper>
    </S.Container>
  );
};

export { DisplayBlock };
