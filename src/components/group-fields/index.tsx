import { inputMap } from 'components';
import { useCanvas } from 'hooks';

import { checkDeepObjectValue } from 'utils';
import { Inputs } from 'types';

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
};

type GroupFieldsProps = {
  fields: Field[];
  label?: string;
  columns?: number;
  conditions?: Conditions;
};

const GroupFields = ({
  label,
  columns = 1,
  fields,
  conditions,
}: GroupFieldsProps) => {
  const { currentSection: obj } = useCanvas();

  const canRender = !!conditions
    ? checkDeepObjectValue({ obj, ...conditions })
    : true;

  return canRender ? (
    <S.Container>
      {!!label && <S.Label>{label}</S.Label>}

      <S.Fields columns={columns}>
        {fields.map(field => {
          const Input = inputMap[field.type];
          const { column, ...rest } = field.props;

          return (
            <S.Field key={field.path} column={column as string}>
              <Input label={field.label} path={field.path} {...rest} />
            </S.Field>
          );
        })}
      </S.Fields>
    </S.Container>
  ) : null;
};

export { GroupFields };
