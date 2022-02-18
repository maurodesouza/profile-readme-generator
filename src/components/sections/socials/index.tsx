import { getSocialImgUrl } from 'utils';
import * as S from './styles';

type SocialStyles = {
  type: 'icon' | 'badge';
  style: string;
  height?: number;
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type SocialIcon = {
  icon: string;
  link: string;
};

type SocialBagde = Record<string, string>;

type Social = SocialIcon | SocialBagde;

type Content = {
  socials: Record<string, Social>;
  styles: SocialStyles;
};

type SocialSectionProps = {
  content: Content;
  styles: SectionStyles;
};

const SocialsSection = ({
  content,
  styles: containerStyles,
}: SocialSectionProps) => {
  const { socials, styles } = content;
  const { type, style, height } = styles;

  return (
    <S.Container {...containerStyles}>
      {Object.entries(socials).map(([social, { link, ...rest }]) => {
        const props = { ...rest, style };

        const Wrapper = !!link ? S.A : ({ children }: any) => <>{children}</>;

        return (
          <Wrapper href={link} key={social}>
            <img
              height={height}
              alt={`${social} logo`}
              src={getSocialImgUrl(type, social, props)}
            />
          </Wrapper>
        );
      })}
    </S.Container>
  );
};

export { SocialsSection };
