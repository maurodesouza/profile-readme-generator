import { ResourceItemProps } from '.';
import { Templates } from './templates';

export type ResourceItemMapperProps = ResourceItemProps & {
  template?: keyof typeof Templates;
};

export function ResourceItemMapper(props: ResourceItemMapperProps) {
  const Component = Templates[props.template || 'Short'];

  return <Component {...props} />;
}
