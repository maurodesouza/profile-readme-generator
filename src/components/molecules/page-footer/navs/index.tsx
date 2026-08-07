'use client';

import { useTranslations } from 'next-intl';

import { navItems } from './nav';
import { Text } from '#/components/atoms/text';

export function FooterNavs() {
  const t = useTranslations('fields');
  const translate = (value: string) =>
    t(value.replace(/\./g, '__dot__')) as string;

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
