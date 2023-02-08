import { Copy } from '@styled-icons/feather';
import { copyToClipboard } from 'utils';

const actions = [
  {
    label: 'Copy',
    icon: Copy,
    action: (content: string) => copyToClipboard(content),
  },
];

export { actions };
