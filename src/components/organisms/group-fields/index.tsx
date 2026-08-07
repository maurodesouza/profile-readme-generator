'use client';

import { useTranslations } from 'next-intl';

import { object } from '#/utils/object';
import { observer } from 'mobx-react-lite';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { actions } from '#/lib/command';
import { Inputs } from '#/types';
import { useCanvas, useSettings } from '#/hooks';

import { variants } from './animations';
import { GroupFieldsLabel } from './label';
import { inputMap } from './fields/inputs-map';

type Conditions = {
  path: string;
  be: 'equal' | string;
  value: unknown;
};

type Field = {
  type: Inputs;
  path: string;
  label: string;
  props?: Record<string, unknown>;
  conditions?: Conditions;
};

type GroupFieldsProps = {
  fields: Field[];
  accordion?: boolean;
  label?: string;
  columns?: number;
  conditions?: Conditions;
  context?: 'canvas' | 'settings';
};

export const GroupFields = observer(function GroupFields(
  props: GroupFieldsProps
) {
  const {
    label,
    columns = 1,
    fields,
    conditions,
    accordion = false,
    context = 'canvas',
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const canvasStore = useCanvas();
  const settingsStore = useSettings();
  const t = useTranslations('fields');

  const translate = (value?: string) => {
    if (!value) return '';

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

  const obj =
    context === 'canvas'
      ? canvasStore.$currentSection
      : { props: settingsStore.$settings };

  function toggleExpansible() {
    setIsExpanded(!isExpanded);
  }

  function onChange(value: string | boolean, path: string) {
    if (context === 'canvas') {
      actions.canvas.section.edit({ value, path });
    } else {
      actions.settings.edit({ value, path });
    }
  }

  const canRender = conditions
    ? object.deep.check({
        obj,
        path: conditions.path,
        be: conditions.be as 'equal',
        value: conditions.value,
      })
    : true;

  const isExpansible = !!label && accordion;

  const accordionState = isExpanded ? 'open' : 'closed';
  const animationState = isExpansible ? accordionState : 'default';

  return canRender ? (
    <div className="mb-md">
      <GroupFieldsLabel
        label={translate(label)}
        animationState={animationState}
        expansible={isExpansible}
        toggleExpansible={toggleExpansible}
      />

      <motion.div
        initial={false}
        animate={animationState}
        variants={variants.fields_container}
      >
        <div
          className="grid gap-x-md gap-y-sm"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {fields.map(field => {
            const Input = inputMap[field.type];
            const { column, placeholder, ...rest } = (field?.props ??
              {}) as Record<string, unknown>;

            const canRender = field.conditions
              ? object.deep.check({
                  obj,
                  path: field.conditions.path,
                  be: field.conditions.be as 'equal',
                  value: field.conditions.value,
                })
              : true;

            const defaultValue = object.deep.get(obj?.props, field.path) as
              | string
              | boolean
              | undefined;

            const translatedPlaceholder =
              typeof placeholder === 'string'
                ? translate(placeholder)
                : undefined;

            return canRender ? (
              <motion.div
                key={field.path}
                variants={variants.field}
                style={{ gridColumn: column as string }}
              >
                <Input
                  label={translate(field.label)}
                  placeholder={translatedPlaceholder}
                  value={defaultValue}
                  onChange={value =>
                    onChange(value as string | boolean, field.path)
                  }
                  {...rest}
                />
              </motion.div>
            ) : null;
          })}
        </div>
      </motion.div>
    </div>
  ) : null;
});
