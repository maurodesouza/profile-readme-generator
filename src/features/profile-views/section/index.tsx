import { GuardSection } from 'components/sections/guard';
import { getProfileViewsUrl, objectToQueryParams } from 'utils';

import { useSettings } from 'hooks';

type Content = {
  type: Parameters<typeof getProfileViewsUrl>[0];
  props: Record<string, unknown>;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type ProfileViewsProps = {
  id: string;
  content: Content;
  styles: Styles;
};

export function ProfileViewsSection(props: ProfileViewsProps) {
  const { id, content, styles } = props;

  const { settings } = useSettings();

  const { type, props: contentProps } = content;
  const { github = '' } = settings.user;

  const url = getProfileViewsUrl(type, github as string);
  const fullUrl = `${url}${objectToQueryParams(contentProps)}`;

  return (
    <GuardSection sectionId={id}>
      <div
        className="flex flex-wrap gap-sm"
        style={{ justifyContent: styles.align }}
      >
        <img src={fullUrl} alt="Profile views count" />
      </div>
    </GuardSection>
  );
}
