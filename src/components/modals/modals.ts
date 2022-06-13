import { Modals } from 'types';

import { ImproveSkillsModal } from './improve-skills';
import { ShareModal } from './share';

const modals = {
  [Modals.IMPROVE_SKILLS]: ImproveSkillsModal,
  [Modals.SHARE]: ShareModal,
};

export { modals };
