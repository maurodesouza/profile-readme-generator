import { motion } from 'framer-motion';

import { Icon } from 'components/ui/primitives/atoms/icon';
import { Text } from 'components/ui/primitives/atoms/text';
import { Clickable } from 'components/ui/primitives/atoms/clickable';

import { variants } from './animations';

type GroupFieldsLabelProps = {
  label?: string;
  expansible: boolean;
  animationState: string;

  toggleExpansible: () => void;
};

export function GroupFieldsLabel(props: GroupFieldsLabelProps) {
  const { label, expansible, animationState, toggleExpansible } = props;

  if (!label) return null;

  if (expansible) {
    return (
      <Clickable.Button
        onClick={toggleExpansible}
        variant="icon"
        tone="brand"
        className="w-full !px-0 !font-semibold"
      >
        <motion.div
          initial={false}
          animate={animationState}
          variants={variants.icon}
        >
          <Icon strokeWidth={2} name="chevron-right" />
        </motion.div>

        {label}
      </Clickable.Button>
    );
  }

  return <Text.Strong className="text-md flex mb-md">{label}</Text.Strong>;
}
