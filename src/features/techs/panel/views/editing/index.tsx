import { observer } from 'mobx-react-lite';

import { useRef } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { GroupFields } from '#/components/organisms/group-fields';
import { Panel } from '#/components/organisms/panel';
import { IconEditor, IconEditorRef } from '#/components/molecules/icon-editor';

import { actions } from '#/lib/command';
import { getDeepObjectProperty } from '#/utils';
import { useCanvas, useForceUpdate } from '#/hooks';

import { fields } from './fields';
import { EditableIcon } from '#/types';

import { Variants } from './variants';
import { Providers } from './providers';

type Icons = {
  [key: string]: EditableIcon;
};

export const Editing = observer(function Editing() {
  const iconEditorRefs = useRef<IconEditorRef[]>([]);

  const forceUpdate = useForceUpdate();
  const canvasStore = useCanvas();

  const selectedIcons = getDeepObjectProperty<Icons>(
    canvasStore.$currentSection,
    'props.content.icons'
  )!;

  const icons = Object.entries(selectedIcons);
  const icon_names = icons.map(icon => icon[0]);

  function onReOrder(order: typeof icon_names) {
    const path = 'content.icons';

    const value = order.reduce((obj, name) => {
      const found = icons.find(icon => icon[0] === name)!;
      obj[found[0]] = found[1];
      return obj;
    }, {} as Icons);

    actions.canvas.section.edit({ path, value });
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
});
