import { Select } from 'components/inputs';
import { GFCommonProps } from './inputs-map';

type GFSelectFieldProps = GFCommonProps<string>;

export function GFSelectField(props: GFSelectFieldProps) {
  const { value, ...rest } = props;

  return <Select defaultValue={value} {...rest} />;
}
