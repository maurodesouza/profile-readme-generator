import React, { useState } from 'react';
import { ChevronRight } from '@styled-icons/feather';

import { inputMap } from 'components';
import { useCanvas } from 'hooks';

import { checkDeepObjectValue, getDeepObjectProperty } from 'utils';
import { Inputs } from 'types';

import { variants } from './animations';
import * as S from './styles';

type Conditions = {
  path: string;
  be: any;
  value: unknown;
};

type Field = {
  type: Inputs;
  path: string;
  label: string;
  props: Record<string, unknown>;
  conditions?: Conditions;
};

type GroupFieldsProps = {
  fields: Field[];
  accordion?: boolean;
  label?: string;
  columns?: number;
  conditions?: Conditions;
};

const GroupFields = ({
  label,
  columns = 1,
  fields,
  conditions,
  accordion = false,
}: GroupFieldsProps) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);
  const { currentSection: obj } = useCanvas();

  const handleOpenAccordion = () => {
    hasAccordion && setIsOpenAccordion(!isOpenAccordion);
  };

  const canRender = !!conditions
    ? checkDeepObjectValue({ obj, ...conditions })
    : true;

  const hasAccordion = !!label && accordion;

  const isGlowOpen = isOpenAccordion || !hasAccordion;
  const animationState = isGlowOpen ? 'open' : 'closed';

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
              <ChevronRight size={18} />
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
            const { column, ...rest } = field.props;

            const canRender = !!field.conditions
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
                  path={field.path}
                  defaultValue={defaultValue}
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
