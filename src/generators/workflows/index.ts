import { CanvasSection, CanvasStatesEnum, ValueOf } from 'types';
import { workflowsGeneratorMap } from './sections';

type Workflows = ReturnType<NonNullable<ValueOf<typeof workflowsGeneratorMap>>>;

const workflowsGenerator = (template: CanvasSection[]) => {
  const workflows = template.reduce((workflows, section) => {
    if (section.props.state === CanvasStatesEnum.ALERT) return workflows;

    const generator = workflowsGeneratorMap[section.type!];

    if (!generator) return workflows;

    const workflow = generator();

    return [...workflows, workflow];
  }, [] as Workflows[]);

  const forder = {
    name: '.github/workflows',
    files: workflows,
  };

  return forder;
};

export { workflowsGenerator };
