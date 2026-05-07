import { TFile } from 'components/ui/primitives/atoms/tree';

import { StatsSectionParserArgs, statsSectionParser } from './readme-parser';
import { statsWorkflowFile } from './stats-workflow';
import { trophyWorkflowFile } from './trophy-workflow';

const statsWorkflowParser = (args: StatsSectionParserArgs): TFile[] | null => {
  const workflows = [statsWorkflowFile(args), trophyWorkflowFile(args)].filter(
    (workflow): workflow is TFile => workflow !== null
  );

  return workflows.length ? workflows : null;
};

export { statsSectionParser, statsWorkflowParser };
