import { events } from 'app';
import { Modals } from 'types';

type NavItem = {
  label: string;
  props: Record<string, unknown>;
};

const navItems: NavItem[] = [
  {
    label: 'Github',
    props: {
      href: 'https://github.com/maurodesouza/profile-readme-generator',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    label: 'Improve your skills',
    props: {
      as: 'button',
      onClick: () => events.modal.open(Modals.IMPROVE_SKILLS),
    },
  },
  {
    label: 'Donate',
    props: {
      href: 'https://www.paypal.com/donate/?hosted_button_id=FR3A2DGVYKGJS',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    label: 'Share',
    props: {
      as: 'button',
      onClick: () => events.modal.open(Modals.SHARE),
    },
  },
];

export { navItems };
