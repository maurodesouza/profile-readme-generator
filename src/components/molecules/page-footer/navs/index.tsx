'use client';

import { navItems } from './nav';
import { Text } from '#/components/atoms/text';
import { useTranslateField } from '#/hooks';

export function FooterNavs() {
  const translate = useTranslateField();

  return (
    <nav className="flex items-center flex-wrap gap-x-xl gap-y-xs desktop:gap-x-md">
      {navItems.map((item, i) => {
        const label = translate(item.label);

        if ('href' in item.props) {
          return (
            <Text.Link key={i} {...item.props}>
              {label}
            </Text.Link>
          );
        }

        return (
          <Text.Clickable key={i} {...item.props}>
            {label}
          </Text.Clickable>
        );
      })}
    </nav>
  );
}
