import { ChangeEvent } from 'react';

import { GFCommonProps } from './inputs-map';
import { Fields } from 'components/ui/primitives/fields';

type GFTextFieldProps = GFCommonProps<string>;

export function GFTextField(props: GFTextFieldProps) {
  const { onChange, ...rest } = props;

  function handleUpdate(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    onChange?.(value);
  }

  return <Fields.Compound.Input onChange={handleUpdate} {...rest} />;
}
