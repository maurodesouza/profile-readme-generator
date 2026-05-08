import { TFile } from 'components/ui/primitives/atoms/tree';

import { StatsSectionParserArgs, statsSectionParser } from './readme-parser';
import { activityGraphWorkflowFile } from './activity-graph-workflow';
import { languagesWorkflowFile } from './languages-workflow';
import { statsWorkflowFile } from './stats-workflow';
import { trophyWorkflowFile } from './trophy-workflow';

const statsWorkflowParser = (args: StatsSectionParserArgs): TFile[] | null => {
  const workflows = [
    statsWorkflowFile(args),
    languagesWorkflowFile(args),
    trophyWorkflowFile(args),
    activityGraphWorkflowFile(args),
  ].filter((workflow): workflow is TFile => workflow !== null);

  return workflows.length ? workflows : null;
};

export { statsSectionParser, statsWorkflowParser };
