import { useRef } from 'react';

import { Panel } from 'components/ui/primitives/atoms/panel';
import { Fields } from 'components/ui/primitives/fields';
import { DisplayBlock } from 'components/ui/primitives/atoms/display-block';

import { events } from 'app';
import { useForceUpdate } from 'hooks';
import { debounce, filterArrayByQueryMatch, getSocialImgUrl } from 'utils';

import { social_icons } from 'resources';

export function Adding() {
  const inputRef = useRef<HTMLInputElement>(null);
  const forceUpdate = useForceUpdate();

  function handleAddSocial(name: string, value: Record<string, unknown>) {
    return () => {
      const path = `content.socials.${name}`;

      events.canvas.edit({ path, value });
    };
  }

  const { value = '' } = inputRef.current || {};

  const filteredOptions = filterArrayByQueryMatch(value, social_icons, [
    'name',
  ]);

  return (
    <>
      <Fields.Compound.Input
        ref={inputRef}
        onInput={debounce(forceUpdate, 200)}
        placeholder="Search..."
        className="mb-md"
      />

      <Panel.Scrollable>
        <div className="h-full grid grid-cols-3 gap-xs items-start content-start">
          {filteredOptions.map(({ icons: [icon], name, short_name, badge }) => (
            <button
              key={name}
              onClick={handleAddSocial(name, { ...badge, short_name, icon })}
            >
              <DisplayBlock.Container>
                <DisplayBlock.Content>
                  <img
                    style={{
                      width: '40%',
                      height: '40%',
                    }}
                    src={getSocialImgUrl('icon', name, { icon })}
                  />
                  <DisplayBlock.Label className="text-xs">
                    {short_name ?? name}
                  </DisplayBlock.Label>
                </DisplayBlock.Content>
              </DisplayBlock.Container>
            </button>
          ))}
        </div>
      </Panel.Scrollable>
    </>
  );
}
