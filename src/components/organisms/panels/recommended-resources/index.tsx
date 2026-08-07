'use client';

import { useTranslations } from 'next-intl';

import { Text } from '#/components/atoms/text';
import { Panel } from '#/components/organisms/panel';
import { ResourceItem } from '#/components/molecules/resource-items';
import { AffiliateWarning } from '#/components/molecules/affiliate-warning';

import { getItems } from './items';

const PanelRecommendedResources = () => {
  const t = useTranslations('ui');
  const items = getItems();

  return (
    <div className="flex flex-col gap-md h-full">
      <Text.Heading as="h2">{t('recommended-resources.heading')}</Text.Heading>

      <div className="flex flex-col gap-xs">
        <Text.Paragraph>
          {t('recommended-resources.description1')}
        </Text.Paragraph>

        <Text.Paragraph>
          {t('recommended-resources.description2')}
        </Text.Paragraph>
      </div>

      <Panel.Scrollable className="space-y-md">
        {items.map(item => (
          <ResourceItem.Mapper key={item.title} {...item} />
        ))}
      </Panel.Scrollable>

      <AffiliateWarning />
    </div>
  );
};

export { PanelRecommendedResources };
