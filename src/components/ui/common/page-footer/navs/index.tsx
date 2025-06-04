import { navItems } from './nav';
import { Text } from 'components/ui/primitives/atoms/text';

export function FooterNavs() {
  return (
    <nav className="flex items-center flex-wrap gap-x-xl gap-y-xs desktop:gap-x-md">
      {navItems.map((item, i) => {
        const El = 'href' in item.props ? Text.Link : Text.Clickable;

        return (
          <El key={i} {...(item.props as any)}>
            {item.label}
          </El>
        );
      })}
    </nav>
  );
}
