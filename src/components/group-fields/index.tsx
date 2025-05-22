import React, { useState } from 'react';

import { inputMap } from 'components';
import { useCanvas, useSettings } from 'hooks';

import { events } from 'app';
import { Inputs } from 'types';
import { checkDeepObjectValue, getDeepObjectProperty } from 'utils';

import { variants } from './animations';
import * as S from './styles';
import { Icon } from 'components/ui/primitives/atoms/icon';

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

const GroupFields = ({
  label,
  columns = 1,
  fields,
  conditions,
  accordion = false,
  context = 'canvas',
}: GroupFieldsProps) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);
  const { currentSection } = useCanvas();
  const { settings } = useSettings();

  const obj = context === 'canvas' ? currentSection : { props: settings };

  const handleOpenAccordion = () => {
    hasAccordion && setIsOpenAccordion(!isOpenAccordion);
  };

  const canRender = conditions
    ? checkDeepObjectValue({ obj, ...conditions })
    : true;

  const hasAccordion = !!label && accordion;

  const accordionState = isOpenAccordion ? 'open' : 'closed';
  const animationState = hasAccordion ? accordionState : 'default';

  const onChange = (value: string | boolean, path: string) => {
    events[context].edit({ value, path });
  };

  return canRender ? (
    <S.Container>
      {!!label && (
        <S.Label hasAccordion={hasAccordion} onClick={handleOpenAccordion}>
          {hasAccordion && (
            <S.WrapperIcon
              initial={false}
              animate={animationState}
              variants={variants.icon}
            >
              <Icon name="chevron-right" size={18} />
            </S.WrapperIcon>
          )}

          {label}
        </S.Label>
      )}

      <S.Grow
        initial={false}
        animate={animationState}
        variants={variants.fields_container}
      >
        <S.Fields columns={columns}>
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
              <S.Field
                key={field.path}
                variants={variants.field}
                column={column as string}
              >
                <Input
                  label={field.label}
                  defaultValue={defaultValue}
                  onChange={value => onChange(value, field.path)}
                  {...rest}
                />
              </S.Field>
            ) : null;
          })}
        </S.Fields>
      </S.Grow>
    </S.Container>
  ) : null;
};

export { GroupFields };
