'use client';

import { observer } from 'mobx-react-lite';

import { IconName } from 'lucide-react/dynamic';

import { Panel } from '#/components/organisms/panel';
import { DisplayBlock } from '#/components/atoms/display-block';

import { useExtensions, useTranslateField } from '#/hooks';
import { PanelsEnum } from '#/types';

import { contents } from './contents';

export const PanelNewSection = observer(function PanelNewSection() {
  const extensionsStore = useExtensions();
  const translate = useTranslateField();

  const items = Object.values(
    extensionsStore.extensions[PanelsEnum.NEW_SECTION] ?? {}
  ) as typeof contents;

  return (
    <Panel.Scrollable>
      <div className="grid grid-cols-2 gap-md">
        {[...contents, ...items].map(({ icon, name, ...rest }) => {
          const El = 'href' in rest ? 'a' : 'button';

          return (
            <El
              key={name}
              {...rest}
              aria-label={translate(name)}
              data-testid={name}
            >
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
