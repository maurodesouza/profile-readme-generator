import React, { useMemo, useRef, useState } from 'react';

import { Fields } from 'components/ui/primitives/fields';
import { Text } from 'components/ui/primitives/atoms/text';
import { Panel } from 'components/ui/primitives/atoms/panel';
import { DisplayBlock } from 'components/ui/primitives/atoms/display-block';

import { events } from '@events';
import { useCanvas, useForceUpdate } from 'hooks';
import { capitalize, cn, debounce, filterArrayByQueryMatch } from 'utils';

import { tech_icons } from 'resources';
import {
  CanvasContent,
  CanvasSection,
  GroupIcons,
  Icon,
  IconProviders,
  Sections,
} from 'types';

type Providers = IconProviders | 'all';

export function Adding() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [provider, setProvider] = useState<Providers>(IconProviders.DEVICONS);

  const forceUpdate = useForceUpdate();
  const { sections } = useCanvas();

  const usedIcons = useMemo(() => {
    const techsSection = sections.find(
      (section: CanvasSection) => section.type === Sections.TECHS
    );
    const content = techsSection?.props.content as CanvasContent;
    return Object.keys(content?.icons || {});
  }, [sections]);

  const groupIcons = useMemo(() => {
    const result: GroupIcons = {
      [IconProviders.SIMPLE_ICONS]: [],
      [IconProviders.SKILL_ICONS]: [],
      [IconProviders.SHIELDS]: [],
      [IconProviders.DEVICONS]: [],
    };

    for (const icon of tech_icons as Icon[]) {
      for (const provider of icon.available_providers) {
        result[provider]!.push(icon);
      }
    }

    return result;
  }, []);

  function filterIconsByProviderAndName(value: string) {
    const result: GroupIcons = {};

    function filter(provider: IconProviders) {
      return filterArrayByQueryMatch(value, groupIcons[provider], [
        'name',
        'alias',
      ]);
    }

    if (provider === 'all') {
      (Object.keys(groupIcons) as IconProviders[]).forEach(
        key => (result[key] = filter(key))
      );
    } else result[provider] = filter(provider);

    return result;
  }

  function handleAddTech(icon: Icon, provider: string, isUsed: boolean) {
    return () => {
      const path = `content.icons.${icon.name}`;

      if (isUsed) {
        events.canvas.edit({ path, value: undefined });
      } else {
        const value = {
          ...icon,
          currentProvider: provider,
          config: {},
        };
        events.canvas.edit({ path, value });
      }
    };
  }

  const { value = '' } = inputRef.current || {};
  const filteredOptions = filterIconsByProviderAndName(value);

  return (
    <>
      <div className="flex gap-md mb-md">
        <Fields.Compound.Input
          label="Search"
          ref={inputRef}
          onInput={debounce(forceUpdate, 200)}
          placeholder="Icon..."
        />

        <Fields.Compound.Combobox
          value={IconProviders.DEVICONS}
          label="Provider"
          onChange={option => setProvider(option.value as Providers)}
          options={[
            { value: 'all', label: 'all' },
            ...Object.values(IconProviders).map(value => ({
              label: value.replace('_', ' '),
              value,
            })),
          ]}
        />
      </div>

      <Panel.Scrollable>
        <div className="h-full grid grid-cols-3 gap-xs items-start content-start">
          {(Object.entries(filteredOptions) as [IconProviders, Icon[]][]).map(
            ([providerName, icons], index) => {
              if (provider !== 'all' && providerName !== provider) return null;

              const isBadge = providerName === 'shields';

              const imgWidth = isBadge ? '75%' : '40%';
              const imgHeight = isBadge ? 'auto' : '40%';

              return (
                <React.Fragment key={providerName}>
                  {provider === 'all' && (
                    <div
                      className={cn(
                        'col-span-3 pb-md',
                        index > 0 && 'border-t border-ring-inner mt-md pt-md'
                      )}
                    >
                      <Text.Strong>
                        {providerName
                          .split('_')
                          .map(w => capitalize(w))
                          .join(' ')}
                      </Text.Strong>
                    </div>
                  )}

                  {icons.map(icon => {
                    const { name, shortname, providers } = icon;
                    const url = providers[providerName]!.path;

                    const isUsed = usedIcons.includes(icon.name);

                    return (
                      <button
                        key={name}
                        onClick={handleAddTech(icon, providerName, isUsed)}
                      >
                        <DisplayBlock.Container
                          className={cn(isUsed && 'is-used')}
                        >
                          <DisplayBlock.Content>
                            <img
                              style={{
                                width: imgWidth,
                                height: imgHeight,
                              }}
                              src={url
                                .replace(/ /g, '')
                                .replace(/(?<=badge\/)(.+)(?=-\w+\?)/, '')}
                            />
                            <DisplayBlock.Label className="text-xs">
                              {shortname ?? name}
                            </DisplayBlock.Label>
                          </DisplayBlock.Content>
                        </DisplayBlock.Container>
                      </button>
                    );
                  })}
                </React.Fragment>
              );
            }
          )}
        </div>
      </Panel.Scrollable>
    </>
  );
}
