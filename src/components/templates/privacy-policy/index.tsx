'use client';

import { useTranslations } from 'next-intl';

import { Page } from '#/components/atoms/page';

const PrivacyPolicyTemplate = () => {
  const t = useTranslations('privacyPolicy');

  return (
    <Page.Container>
      <Page.Wrapper centered>
        <Page.Content className="gap-md">
          <div
            dangerouslySetInnerHTML={{ __html: t.raw('content') as string }}
          />
        </Page.Content>
      </Page.Wrapper>
    </Page.Container>
  );
};

export { PrivacyPolicyTemplate };
