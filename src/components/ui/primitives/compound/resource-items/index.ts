import { ResourceItemMapper } from './mapper';
import { Templates } from './templates';

export type ResourceItemProps = {
  title: string;
  subtitle?: string;
  description: string;

  imageSrc: string;

  link: string;
  linkLabel: string;
  linkTarget?: string;
};

export const ResourceItem = {
  Templates,
  Mapper: ResourceItemMapper,
};
