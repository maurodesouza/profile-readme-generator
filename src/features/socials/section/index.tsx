import { url } from '#/utils/url';
import { observer } from 'mobx-react-lite';
import type { ReactNode } from 'react';

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

export const SocialsSection = observer(function SocialsSection(
  props: SocialSectionProps
) {
  const { content, styles: containerStyles } = props;

  const { socials, styles } = content;
  const { type, style, height } = styles;

  const fixSpacing = type === 'badge' ? 5 : containerStyles.spacing;

  return (
    <div
      className="flex flex-wrap"
      style={{ justifyContent: containerStyles.align, gap: `${fixSpacing}px` }}
    >
      {Object.entries(socials).map(([social, { link, ...rest }]) => {
        const props = { ...rest, style };

        const Wrapper = link
          ? 'a'
          : ({
              children,
            }: {
              children: ReactNode;
              href?: string;
              target?: string;
            }) => <>{children}</>;

        return (
          <Wrapper href={link} key={social} target="_blank">
            <img
              style={{ height: `${height}px` }}
              alt={`${social} logo`}
              src={url.getSocialImg(type, social, props)}
            />
          </Wrapper>
        );
      })}
    </div>
  );
});
