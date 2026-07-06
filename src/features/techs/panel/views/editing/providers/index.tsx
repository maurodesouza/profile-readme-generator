import { Text } from '#/components/atoms/text';
import { DropdownMenu } from '#/components/atoms/dropdown-menu';

import { actions } from 'lib/command';
import { IconProviders } from 'types';

type ProvidersProps = {
  icon: string;
  current: string;
  available: IconProviders[];
};

export function Providers({ icon, current, available }: ProvidersProps) {
  function changeProvider(value: string) {
    return () => {
      if (value === current) return;

      const path = `content.icons.${icon}.currentProvider`;

      actions.canvas.edit({ path, value });
    };
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Text.Clickable className="block">{current}</Text.Clickable>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Label>Providers</DropdownMenu.Label>
        <DropdownMenu.Separator />
        {Object.values(IconProviders).map(provider => {
          const isCurrent = provider === current;

          if (isCurrent) return null;

          const isUnavailable = !available.includes(provider);

          return (
            <DropdownMenu.Item
              key={provider}
              onClick={changeProvider(provider)}
              disabled={isUnavailable}
            >
              {provider}
            </DropdownMenu.Item>
          );
        })}
        <DropdownMenu.Separator />
        <DropdownMenu.Item disabled>Current: {current}</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
