import { useRef } from 'react';

import { DisplayBlock, SimpleInput } from 'components';
import { Panel } from 'components/ui/primitives/atoms/panel';

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
      <SimpleInput
        ref={inputRef}
        onInput={debounce(forceUpdate, 200)}
        placeholder="Search..."
        className="mb-md"
      />

      <Panel.Scrollable>
        <div className="h-full grid grid-cols-3 gap-xs items-start content-start">
          {filteredOptions.map(({ icons: [icon], name, short_name, badge }) => (
            <DisplayBlock
              key={name}
              display={getSocialImgUrl('icon', name, { icon })}
              label={short_name || name}
              onClick={handleAddSocial(name, { ...badge, short_name, icon })}
            />
          ))}
        </div>
      </Panel.Scrollable>
    </>
  );
}
