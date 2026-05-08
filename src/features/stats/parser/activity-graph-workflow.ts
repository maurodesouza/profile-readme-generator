import { TFile } from 'components/ui/primitives/atoms/tree';
import { objectToQueryParams } from 'utils';

import { StatsSectionParserArgs } from './readme-parser';

type Obj = Record<string, unknown>;

const buildActivityGraphOptions = (props: Obj) => {
  const rest = { ...props };

  Reflect.deleteProperty(rest, 'show');
  Reflect.deleteProperty(rest, 'order');
  Reflect.deleteProperty(rest, 'height');

  const customTitle = rest.customTitle as string | undefined;
  Reflect.deleteProperty(rest, 'customTitle');

  const query = objectToQueryParams(rest);

  let options = query;

  if (customTitle) {
    options += `${options ? '&' : ''}custom_title=${encodeURI(customTitle)}`;
  }

  return options;
};

const activityGraphWorkflowFile = ({
  content,
}: StatsSectionParserArgs): TFile | null => {
  const graphs = content?.graphs as Record<string, Obj> | undefined;
  const activityGraph = graphs?.['activity-graph'];

  if (!activityGraph?.show) return null;

  const options = buildActivityGraphOptions(activityGraph);

  const workflowContent = `
name: Update Activity Graph

on:
  schedule: # execute every 12 hours
    - cron: "* */12 * * *"

  workflow_dispatch:

jobs:
  build:
    permissions:
      contents: write
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v6

      - name: Generate activity graph
        uses: maurodesouza/github-readme-activity-graph-action@v1
        with:
          username: ${'${{ github.repository_owner }}'}
          options: ${options}
          output_path: dist/activity-graph.svg
          token: ${'${{ secrets.GITHUB_TOKEN }}'}

      - name: Push activity-graph.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: activity-graph-output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${'${{ secrets.GITHUB_TOKEN }}'}
`.trim();

  return {
    file: 'activity-graph.yml',
    content: workflowContent,
  };
};

export { activityGraphWorkflowFile };
