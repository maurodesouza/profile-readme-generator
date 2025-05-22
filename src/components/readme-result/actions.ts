import { IconName } from 'lucide-react/dynamic';
import { copyToClipboard } from 'utils';

type Action = {
  label: string;
  icon: IconName;
  action: (content: string) => void;
};

const actions: Action[] = [
  {
    label: 'Copy',
    icon: 'copy',
    action: (content: string) => copyToClipboard(content),
  },
];

export { actions };
