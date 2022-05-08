import { Sections } from 'types';

import { generateSnakeWorkflow } from './snake';

type WorkflowsGeneratoMap = {
  [key in Sections]?: typeof generateSnakeWorkflow;
};

const workflowsGeneratorMap: WorkflowsGeneratoMap = {
  [Sections.SNAKE]: generateSnakeWorkflow,
};

export { workflowsGeneratorMap };
