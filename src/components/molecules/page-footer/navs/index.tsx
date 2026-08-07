'use client';

import { useTranslations } from 'next-intl';

import { navItems } from './nav';
import { Text } from '#/components/atoms/text';

export function FooterNavs() {
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
    <nav className="flex items-center flex-wrap gap-x-xl gap-y-xs desktop:gap-x-md">
      {navItems.map((item, i) => {
        const El = 'href' in item.props ? Text.Link : Text.Clickable;

        return (
          <El key={i} {...(item.props as React.ComponentProps<typeof El>)}>
            {translate(item.label)}
          </El>
        );
      })}
    </nav>
  );
}
