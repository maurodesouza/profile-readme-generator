import { Modals } from 'types';

import { ImproveSkillsModal } from './improve-skills';
import { ShareModal } from './share';
import { ConfirmModal } from './confirm';

const modals = {
  [Modals.IMPROVE_SKILLS]: ImproveSkillsModal,
  [Modals.SHARE]: ShareModal,
  [Modals.CONFIRM]: ConfirmModal,
};

export { modals };
