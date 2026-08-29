import { tailwind } from '#/utils/tailwind';

import { Text } from '#/components/atoms/text';
import { Icon as IconPure } from '#/components/atoms/icon';

const Container = tailwind.twx
  .div`group relative w-full rounded-md box-border pt-[100%] transition-colors hover:border-palette-base!`;

const Content = tailwind.twx
  .div`absolute inset-0 w-full flex flex-col items-center justify-center gap-xs`;

const Icon = tailwind.twx(
  IconPure
)`group-hover:text-palette-accent transition-colors`;

const Label = tailwind.twx(
  Text.Paragraph
)`group-hover:text-palette-accent transition-colors text-center`;

export const DisplayBlock = {
  Container,
  Content,
  Label,
  Icon,
};
