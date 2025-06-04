import { getSocialImgUrl } from 'utils';

type SocialStyles = {
  type: 'icon' | 'badge';
  style: string;
  height?: number;
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
  spacing: number;
};

type SocialIcon = {
  icon: string;
  link: string;
};

type SocialBadge = Record<string, string>;

type Social = SocialIcon | SocialBadge;

type Content = {
  socials: Record<string, Social>;
  styles: SocialStyles;
};

type SocialSectionProps = {
  content: Content;
  styles: SectionStyles;
};

export function SocialsSection(props: SocialSectionProps) {
  const { content, styles: containerStyles } = props;

  const { socials, styles } = content;
  const { type, style, height } = styles;

  const fixSpacing = type === 'badge' ? 5 : containerStyles.spacing;

  return (
    <div
      className="flex flex-wrap"
      style={{ justifyContent: containerStyles.align, gap: fixSpacing }}
    >
      {Object.entries(socials).map(([social, { link, ...rest }]) => {
        const props = { ...rest, style };

        const Wrapper = link ? 'a' : ({ children }: any) => <>{children}</>;

        return (
          <Wrapper href={link} key={social} target="_blank">
            <img
              style={{ height: `${height}px` }}
              alt={`${social} logo`}
              src={getSocialImgUrl(type, social, props)}
            />
          </Wrapper>
        );
      })}
    </div>
  );
}
