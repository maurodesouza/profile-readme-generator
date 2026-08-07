'use client';

import { useTranslations } from 'next-intl';

import { Text } from '#/components/atoms/text';
import { Tile } from '#/components/atoms/tile';
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

  const t = useTranslations('fields');
  const translate = (value: string) => {
    const slugKey = value
      .replace(/__dot__/g, '.')
      .replace(/\./g, '-dot-')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()
      .replace(/_/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');

    return (t.has(slugKey) ? t(slugKey) : value) as string;
  };

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
