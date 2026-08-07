'use client';

import { useTranslations } from 'next-intl';

import { object } from '#/utils/object';
import { url } from '#/utils/url';
import { observer } from 'mobx-react-lite';

import { GuardSection } from '#/components/organisms/sections/guard';

import { useSettings } from '#/hooks';
import { Params } from '#/types';

type Providers = Parameters<typeof url.getProfileViews>[0];

type Views = {
  [key in Providers]: Params;
};

type Content = {
  provider: Parameters<typeof url.getProfileViews>[0];
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

export const ProfileViewsSection = observer(function ProfileViewsSection(
  props: ProfileViewsProps
) {
  const { id, content, styles } = props;

  const t = useTranslations('ui');
  const settingsStore = useSettings();

  const { provider, views } = content;
  const { github = '' } = settingsStore.$settings.user;

  const srcUrl = url.getProfileViews(provider, github as string);
  const fullUrl = `${srcUrl}${object.toQueryParams(views[provider])}`;

  return (
    <GuardSection sectionId={id}>
      <div
        className="flex flex-wrap gap-sm"
        style={{ justifyContent: styles.align }}
      >
        <img src={fullUrl} alt={t('alts.profile-views')} />
      </div>
    </GuardSection>
  );
});
