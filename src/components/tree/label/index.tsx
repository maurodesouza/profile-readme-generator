import * as S from './styles';

type LabelProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Label = ({ children, ...rest }: LabelProps) => (
  <S.Container {...rest}>{children}</S.Container>
);

export { Label };
