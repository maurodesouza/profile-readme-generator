import { twx } from 'utils';
import { Text } from './text';
import { Icon as IconPure } from './icon';

const Container = twx.div`group relative w-full rounded-md box-border pt-[100%] transition-colors hover:!border-tone-luminosity-300`;

const Content = twx.div`absolute inset-0 w-full flex flex-col items-center justify-center gap-xs`;

const Icon = twx(
  IconPure
)`group-hover:text-tone-foreground-context transition-colors`;

const Label = twx(
  Text.Paragraph
)`group-hover:text-tone-foreground-context transition-colors`;

export const DisplayBlock = {
  Container,
  Content,
  Label,
  Icon,
};
