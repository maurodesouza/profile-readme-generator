import { ChangeEvent } from 'react';

import { GFCommonProps } from './inputs-map';
import { Fields } from 'components/ui/primitives/fields';

type GFTextAreaFieldProps = GFCommonProps<string>;

export function GFTextAreaField(props: GFTextAreaFieldProps) {
  const { onChange, ...rest } = props;

  function handleUpdate(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;

    onChange?.(value);
  }

  return <Fields.Compound.Textarea onChange={handleUpdate} {...rest} />;
}
