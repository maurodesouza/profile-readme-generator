import React, { useMemo, useRef, useState } from 'react';

import { DisplayBlock, SimpleInput, Select } from 'components';
import { events } from 'app';

import { useForceUpdate } from 'hooks';
import { capitalize, debounce, filterArrayByQueryMatch } from 'utils';

import { tech_icons } from 'resources';
import { GroupIcons, Icon, IconProviders } from 'types';

import * as S from './styles';

type Providers = IconProviders | 'all';

const Adding = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [provider, setProvider] = useState<Providers>(IconProviders.DEVICONS);

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

    const filter = (provider: IconProviders) =>
      filterArrayByQueryMatch(value, groupIcons[provider], ['name', 'alias']);

    if (provider === 'all') {
      (Object.keys(groupIcons) as IconProviders[]).forEach(
        key => (result[key] = filter(key))
      );
    } else result[provider] = filter(provider);

    return result;
  }

  const forceUpdate = useForceUpdate();

  const handleAddTech = (icon: Icon, provider: string) => () => {
    const path = `content.icons.${icon.name}`;
    const value = {
      ...icon,
      currentProvider: provider,
      config: {},
    };

    events.canvas.edit({ path, value });
  };

  const { value = '' } = inputRef.current || {};

  const filteredOptions = filterIconsByProviderAndName(value);

  return (
    <>
      <S.Wrapper>
        <SimpleInput
          label="Search"
          ref={inputRef}
          onInput={debounce(forceUpdate, 200)}
          placeholder="Icon..."
        />

        <Select
          defaultValue={IconProviders.DEVICONS}
          label="Provider"
          onChange={value => setProvider(value as Providers)}
          options={[
            { value: 'all', label: 'all' },
            ...Object.values(IconProviders).map(value => ({
              label: value.replace('_', ' '),
              value,
            })),
          ]}
        />
      </S.Wrapper>

      <S.Content>
        {(Object.entries(filteredOptions) as [IconProviders, Icon[]][]).map(
          ([providerName, icons]) => {
            if (provider !== 'all' && providerName !== provider) return null;

            const isBadge = providerName === 'shields';

            const imgWidth = isBadge ? '75%' : undefined;
            const imgHeight = isBadge ? 'auto' : undefined;

            return (
              <React.Fragment key={providerName}>
                {provider === 'all' && (
                  <S.Divider>
                    {providerName
                      .split('_')
                      .map(w => capitalize(w))
                      .join(' ')}
                  </S.Divider>
                )}

                {icons.map(icon => {
                  const { name, shortname, providers } = icon;
                  const url = providers[providerName]!.path;

                  return (
                    <DisplayBlock
                      key={name}
                      display={url
                        .replace(/ /g, '')
                        .replace(/(?<=badge\/)(.+)(?=-\w+\?)/, '')}
                      onClick={handleAddTech(icon, providerName)}
                      label={shortname ?? name}
                      imgWidth={imgWidth}
                      imgHeight={imgHeight}
                    />
                  );
                })}
              </React.Fragment>
            );
          }
        )}
      </S.Content>
    </>
  );
};

export { Adding };
