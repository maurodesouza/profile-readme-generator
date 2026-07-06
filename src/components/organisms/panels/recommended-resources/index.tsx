import { useRouter } from 'next/router';

import { Text } from '#/components/atoms/text';
import { Panel } from '#/components/organisms/panel';
import { ResourceItem } from '#/components/molecules/resource-items';
import { AffiliateWarning } from '#/components/molecules/affiliate-warning';

import { getItems } from './items';

const PanelRecommendedResources = () => {
  const { locale = 'en' } = useRouter();

  const items = getItems(locale);

  return (
    <div className="flex flex-col gap-md h-full">
      <Text.Heading as="h2">Level Up Your README</Text.Heading>

      <div className="flex flex-col gap-xs">
        <Text.Paragraph>
          Anyone can use templates — but when you know what you’re doing, it
          shows.
        </Text.Paragraph>

        <Text.Paragraph>
          👉 Explore resources that will upgrade your skills — and your README.
          Start now.
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
