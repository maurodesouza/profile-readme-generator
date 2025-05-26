import { events } from 'app';

import { ShareModal } from 'components/ui/common/modals/share';

type LinkProps = {
  href: string;
  target: string;
  rel: string;
};

type ButtonProps = {
  onClick: () => void;
};

type NavItem = {
  label: string;
  props: LinkProps | ButtonProps;
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
      onClick: () => events.modal.open(ShareModal),
    },
  },

  {
    label: 'Privacy Policy',
    props: {
      href: '/privacy-policy',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
];

export { navItems };
