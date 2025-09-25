import { Text } from 'components/ui/primitives/atoms/text';
import { Tile } from 'components/ui/primitives/atoms/tile';
import { ResourceItemProps } from '..';

export function ShortResourceItem(props: ResourceItemProps) {
  const {
    title,
    imageSrc,
    description,
    link,
    linkLabel,
    linkTarget = '_blank',
  } = props;

  return (
    <Tile.Container className="h-auto flex-col">
      <div className="flex gap-md">
        <Tile.Img src={imageSrc} className="self-center" />

        <Tile.Content className="flex flex-col gap-1">
          <Tile.Label>{title}</Tile.Label>

          <Text.Paragraph>{description}</Text.Paragraph>
        </Tile.Content>
      </div>

      <Text.Link href={link} target={linkTarget} className="self-end">
        {linkLabel}
      </Text.Link>
    </Tile.Container>
  );
}
