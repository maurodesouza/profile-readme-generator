import { Text } from 'components/ui/primitives/atoms/text';
import { Tile } from 'components/ui/primitives/atoms/tile';
import { ResourceItemProps } from '..';

export function HighlightedResourceItem(props: ResourceItemProps) {
  const {
    title,
    subtitle,
    imageSrc,
    description,
    link,
    linkLabel,
    linkTarget = '_blank',
  } = props;

  return (
    <Tile.Container className="h-auto flex-col">
      <div className="flex justify-center border-b w-[calc(100%+2.4rem)] -ml-sm p-sm border-ring-inner">
        <Tile.Img src={imageSrc} className="self-center h-36 w-36" />
      </div>

      <Tile.Content className="flex flex-col items-center justify-center">
        <Tile.Label>{title}</Tile.Label>
        <Text.Paragraph>{subtitle}</Text.Paragraph>
      </Tile.Content>

      <Text.Paragraph className="text-center">{description}</Text.Paragraph>

      <Text.Link href={link} target={linkTarget} className="self-center">
        {linkLabel}
      </Text.Link>
    </Tile.Container>
  );
}
