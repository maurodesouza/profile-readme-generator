'use client';

import { Text } from '#/components/atoms/text';
import { Tile } from '#/components/atoms/tile';
import { useTranslateField } from '#/hooks';
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

  const translate = useTranslateField();

  return (
    <Tile.Container className="h-auto flex-col">
      <div className="flex justify-center border-b w-[calc(100%+2.4rem)] -ml-sm p-sm border-palette-line">
        <Tile.Img src={imageSrc} className="self-center h-36 w-36" />
      </div>

      <Tile.Content className="flex flex-col items-center justify-center">
        <Tile.Label>{translate(title)}</Tile.Label>
        <Text.Paragraph>{translate(subtitle)}</Text.Paragraph>
      </Tile.Content>

      <Text.Paragraph className="text-center">
        {translate(description)}
      </Text.Paragraph>

      <Text.Link href={link} target={linkTarget} className="self-center">
        {translate(linkLabel)}
      </Text.Link>
    </Tile.Container>
  );
}
