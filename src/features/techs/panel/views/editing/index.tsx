import { useRef } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { GroupFields } from 'components';
import { Panel } from 'components/ui/primitives/atoms/panel';
import {
  IconEditor,
  IconEditorRef,
} from 'components/ui/primitives/compound/icon-editor';

import { events } from '@events';
import { getDeepObjectProperty } from 'utils';
import { useCanvas, useForceUpdate } from 'hooks';

import { fields } from './fields';
import { EditableIcon } from 'types';

import { Variants } from './variants';
import { Providers } from './providers';

type Icons = {
  [key: string]: EditableIcon;
};

export function Editing() {
  const iconEditorRefs = useRef<IconEditorRef[]>([]);

  const forceUpdate = useForceUpdate();
  const { currentSection } = useCanvas();

  const selectedIcons = getDeepObjectProperty<Icons>(
    currentSection,
    'props.content.icons'
  )!;

  const icons = Object.entries(selectedIcons);
  const icon_names = icons.map(icon => icon[0]);

  function onReOrder(order: typeof icon_names) {
    const path = 'content.icons';

    const value = order.reduce((obj, name) => {
      const finded = icons.find(icon => icon[0] === name)!;

      obj[finded[0]] = finded[1];

      return obj;
    }, {} as Icons);

    events.canvas.edit({ path, value });
    setTimeout(forceUpdate, 200);
  }

  return (
    <Panel.Scrollable>
      {fields.map(field => (
        <GroupFields key={field.id} {...field} />
      ))}

      <AnimatePresence>
        <Reorder.Group axis="y" values={icon_names} onReorder={onReOrder}>
          {icons.map(([name, props], index) => {
            const {
              currentProvider,
              providers,
              available_providers,
              config,
              shortname,
            } = props;

            const provider = providers[currentProvider]!;

            const providerVariants = provider.variants || [];
            const hasVariants = !!providerVariants.length;

            const logo = hasVariants
              ? providerVariants[
                  (config[currentProvider]?.variant ?? 0) as number
                ]
              : provider!.path;

            return (
              <IconEditor
                key={name}
                id={name}
                label={shortname ?? name}
                baseEditPath="content.icons"
                img={{
                  alt: `${name} logo`,
                  url: logo
                    .replace(/ /g, '')
                    .replace(/(?<=badge\/)(.+)(?=-\w+\?)/, ''),
                }}
                slots={{
                  supportingContent: () => (
                    <Providers
                      icon={name}
                      current={currentProvider}
                      available={available_providers}
                    />
                  ),
                  expansibleContent: hasVariants
                    ? () => (
                        <Variants
                          icon={name}
                          provider={currentProvider}
                          variants={providers[currentProvider]?.variants}
                        />
                      )
                    : undefined,
                }}
                ref={ref => {
                  iconEditorRefs.current[index] = ref!;
                }}
                refs={iconEditorRefs.current}
              />
            );
          })}
        </Reorder.Group>
      </AnimatePresence>
    </Panel.Scrollable>
  );
}
