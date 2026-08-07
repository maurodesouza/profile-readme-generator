'use client';

import { useTranslations } from 'next-intl';

import { Text } from '#/components/atoms/text';
import { Tile } from '#/components/atoms/tile';
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

    return t(slugKey) as string;
  };

  return (
    <Tile.Container className="h-auto flex-col">
      <div className="flex justify-center border-b w-[calc(100%+2.4rem)] -ml-sm p-sm border-ring-inner">
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
