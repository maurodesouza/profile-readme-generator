import { GFCommonProps } from './inputs-map';
import { Fields } from '#/components/molecules/fields';

type GFSelectFieldProps = GFCommonProps<string>;

export function GFSelectField(props: GFSelectFieldProps) {
  const { onChange, ...rest } = props;

  return (
    <Fields.Compound.Combobox
      onChange={option => onChange(option.value)}
      {...rest}
    />
  );
}
