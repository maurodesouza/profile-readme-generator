'use client';

import { useTranslations } from 'next-intl';

import { observer } from 'mobx-react-lite';

import { IconName } from 'lucide-react/dynamic';

import { Panel } from '#/components/organisms/panel';
import { DisplayBlock } from '#/components/atoms/display-block';

import { useExtensions } from '#/hooks';
import { PanelsEnum } from '#/types';

import { contents } from './contents';

export const PanelNewSection = observer(function PanelNewSection() {
  const extensionsStore = useExtensions();
  const t = useTranslations('fields');
  const translate = (value: string) => {
    const slugKey = value
      .replace(/__dot__/g, '.')
      .replace(/\./g, '-dot-')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()
      .replace(/_/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');

    return t(slugKey) as string;
  };

  const items = Object.values(
    extensionsStore.extensions[PanelsEnum.NEW_SECTION] ?? {}
  ) as typeof contents;

  return (
    <Panel.Scrollable>
      <div className="grid grid-cols-2 gap-md">
        {[...contents, ...items].map(({ icon, name, ...rest }) => {
          const El = 'href' in rest ? 'a' : 'button';

          return (
            <El key={name} {...rest}>
              <DisplayBlock.Container>
                <DisplayBlock.Content>
                  <DisplayBlock.Icon
                    name={icon as IconName}
                    size={48}
                    className="text-inherit group-hover/test:animate-spin"
                  />
                  <DisplayBlock.Label>{translate(name)}</DisplayBlock.Label>
                </DisplayBlock.Content>
              </DisplayBlock.Container>
            </El>
          );
        })}
      </div>
    </Panel.Scrollable>
  );
});
