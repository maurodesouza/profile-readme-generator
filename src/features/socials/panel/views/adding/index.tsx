'use client';

import { array } from '#/utils/array';
import { fn } from '#/utils/fn';
import { tailwind } from '#/utils/tailwind';
import { url } from '#/utils/url';
import { observer } from 'mobx-react-lite';

import { useMemo, useRef } from 'react';

import { Panel } from '#/components/organisms/panel';
import { Fields } from '#/components/molecules/fields';
import { DisplayBlock } from '#/components/atoms/display-block';

import { actions } from '#/lib/command';
import { useCanvas, useForceUpdate } from '#/hooks';

import { social_icons } from '#/resources';
import { CanvasContent, CanvasSection, Sections } from '#/types';

export const Adding = observer(function Adding() {
  const inputRef = useRef<HTMLInputElement>(null);
  const forceUpdate = useForceUpdate();
  const canvasStore = useCanvas();

  const usedSocials = useMemo(() => {
    const socialsSection = canvasStore.sections.find(
      (section: CanvasSection) => section.type === Sections.SOCIALS
    );
    const content = socialsSection?.props.content as CanvasContent;
    return Object.keys(content?.socials || {});
  }, [canvasStore.sections]);

  function handleAddSocial(
    name: string,
    value: Record<string, unknown>,
    isUsed: boolean
  ) {
    return () => {
      const path = `content.socials.${name}`;

      if (isUsed) {
        actions.canvas.section.edit({ path, value: undefined });
      } else {
        actions.canvas.section.edit({ path, value });
      }
    };
  }

  const { value = '' } = inputRef.current || {};

  const filteredOptions = array.filterByQueryMatch(value, social_icons, [
    'name',
    'short_name',
  ]);

  return (
    <>
      <Fields.Compound.Input
        ref={inputRef}
        onInput={fn.debounce(forceUpdate, 200)}
        placeholder="Search..."
        className="mb-md"
      />

      <Panel.Scrollable>
        <div className="h-full grid grid-cols-3 gap-xs items-start content-start">
          {filteredOptions.map(({ icons: [icon], name, short_name, badge }) => {
            const isUsed = usedSocials.includes(name);

            return (
              <button
                key={name}
                onClick={handleAddSocial(
                  name,
                  { ...badge, short_name, icon },
                  isUsed
                )}
              >
                <DisplayBlock.Container
                  className={tailwind.cn(isUsed && 'is-used')}
                >
                  <DisplayBlock.Content>
                    <img
                      style={{
                        width: '40%',
                        height: '40%',
                      }}
                      src={url.getSocialImg('icon', name, { icon })}
                    />
                    <DisplayBlock.Label className="text-xs">
                      {short_name ?? name}
                    </DisplayBlock.Label>
                  </DisplayBlock.Content>
                </DisplayBlock.Container>
              </button>
            );
          })}
        </div>
      </Panel.Scrollable>
    </>
  );
});
