'use client';

import { navItems } from './nav';
import { Text } from '#/components/atoms/text';
import { useTranslateField } from '#/hooks';

export function FooterNavs() {
  const translate = useTranslateField();

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
