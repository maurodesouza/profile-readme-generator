'use client';

import { Text } from '#/components/atoms/text';
import { Tile } from '#/components/atoms/tile';
import { useTranslateField } from '#/hooks';
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

  const translate = useTranslateField();

  return (
    <Tile.Container className="h-auto flex-col">
      <div className="flex gap-md">
        <Tile.Img src={imageSrc} className="self-center" />

        <Tile.Content className="flex flex-col gap-1">
          <Tile.Label>{translate(title)}</Tile.Label>

          <Text.Paragraph>{translate(description)}</Text.Paragraph>
        </Tile.Content>
      </div>

      <Text.Link href={link} target={linkTarget} className="self-end">
        {translate(linkLabel)}
      </Text.Link>
    </Tile.Container>
  );
}
