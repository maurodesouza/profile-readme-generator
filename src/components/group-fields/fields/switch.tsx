import { GFCommonProps } from './inputs-map';
import { Fields } from 'components/ui/primitives/fields';

type GFSwitchFieldProps = GFCommonProps<boolean>;

export function GFSwitchField(props: GFSwitchFieldProps) {
  const { value, onChange, ...rest } = props;

  function onCheckedChange(checked: boolean) {
    onChange?.(checked);
  }

  return (
    <Fields.Compound.Switch
      checked={value}
      onCheckedChange={onCheckedChange}
      {...rest}
    />
  );
}
