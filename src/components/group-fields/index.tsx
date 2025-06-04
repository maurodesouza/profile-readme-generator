import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { events } from 'app';
import { Inputs } from 'types';
import { useCanvas, useSettings } from 'hooks';
import { checkDeepObjectValue, getDeepObjectProperty } from 'utils';

import { variants } from './animations';
import { GroupFieldsLabel } from './label';
import { inputMap } from './fields/inputs-map';

type Conditions = {
  path: string;
  be: any;
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

export function GroupFields(props: GroupFieldsProps) {
  const {
    label,
    columns = 1,
    fields,
    conditions,
    accordion = false,
    context = 'canvas',
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const { currentSection } = useCanvas();
  const { settings } = useSettings();

  const obj = context === 'canvas' ? currentSection : { props: settings };

  function toggleExpansible() {
    setIsExpanded(!isExpanded);
  }

  function onChange(value: string | boolean, path: string) {
    events[context].edit({ value, path });
  }

  const canRender = conditions
    ? checkDeepObjectValue({ obj, ...conditions })
    : true;

  const isExpansible = !!label && accordion;

  const accordionState = isExpanded ? 'open' : 'closed';
  const animationState = isExpansible ? accordionState : 'default';

  return canRender ? (
    <div className="mb-md">
      <GroupFieldsLabel
        label={label}
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
            const { column, ...rest } = field?.props ?? {};

            const canRender = field.conditions
              ? checkDeepObjectValue({ obj, ...field.conditions })
              : true;

            const defaultValue = getDeepObjectProperty<any>(
              obj?.props,
              field.path
            );

            return canRender ? (
              <motion.div
                key={field.path}
                variants={variants.field}
                style={{ gridColumn: column as string }}
              >
                <Input
                  label={field.label}
                  value={defaultValue}
                  onChange={value => onChange(value, field.path)}
                  {...rest}
                />
              </motion.div>
            ) : null;
          })}
        </div>
      </motion.div>
    </div>
  ) : null;
}
