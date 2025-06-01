import { Text } from '../atoms/text';
import { Tile } from '../atoms/tile';

type ResourceItemProps = {
  name: string;
  image: string;
  description: string;

  link: string;
  linkLabel: string;
  linkTarget?: string;
};

export function ResourceItem(props: ResourceItemProps) {
  const {
    name,
    image,
    description,
    link,
    linkLabel,
    linkTarget = '_blank',
  } = props;

  return (
    <Tile.Container className="h-auto flex-col">
      <div className="flex gap-md">
        <Tile.Img src={image} className="self-center" />

        <Tile.Content>
          <Tile.Label>{name}</Tile.Label>

          <Text.Paragraph>{description}</Text.Paragraph>
        </Tile.Content>
      </div>

      <Text.Link href={link} target={linkTarget} className="self-end">
        {linkLabel}
      </Text.Link>
    </Tile.Container>
  );
}
