import { GuardSection } from 'components/sections/guard';
import { getProfileViewsUrl, objectToQueryParams } from 'utils';

import { useSettings } from 'hooks';
import { Params } from 'types';

type Providers = Parameters<typeof getProfileViewsUrl>[0];

type Views = {
  [key in Providers]: Params;
};

type Content = {
  provider: Parameters<typeof getProfileViewsUrl>[0];
  views: Views;
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

  const { provider, views } = content;
  const { github = '' } = settings.user;

  const url = getProfileViewsUrl(provider, github as string);
  const fullUrl = `${url}${objectToQueryParams(views[provider])}`;

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
