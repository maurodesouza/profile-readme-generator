import { ResourceItem, AffiliateWarning } from 'components';

import { Text } from 'components/ui/primitives/atoms/text';
import { Panel } from 'components/ui/primitives/atoms/panel';

import { getItems } from './items';

const PanelRecommendedResources = () => {
  const items = getItems();

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

      <Panel.Scrollable>
        {items.map(item => (
          <ResourceItem key={item.name} {...item} />
        ))}
      </Panel.Scrollable>

      <AffiliateWarning />
    </div>
  );
};

export { PanelRecommendedResources };
