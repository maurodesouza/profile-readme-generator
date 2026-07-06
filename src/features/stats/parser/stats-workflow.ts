import { TFile } from '#/components/atoms/tree';
import { objectToQueryParams } from 'utils';

import { StatsSectionParserArgs } from './readme-parser';

type Obj = Record<string, unknown>;

const buildStatsWorkflowOptions = (props: Obj) => {
  const rest = { ...props };

  Reflect.deleteProperty(rest, 'show');
  Reflect.deleteProperty(rest, 'height');
  Reflect.deleteProperty(rest, 'order');

  const repositoryOwner = '${{ github.repository_owner }}';
  const query = objectToQueryParams(rest);

  return query
    ? `username=${repositoryOwner}&${query}`
    : `username=${repositoryOwner}`;
};

const statsWorkflowFile = ({
  content,
}: StatsSectionParserArgs): TFile | null => {
  const graphs = content?.graphs as Record<string, Obj> | undefined;
  const stats = graphs?.stats;

  if (!stats?.show) return null;

  const options = buildStatsWorkflowOptions(stats);

  const workflowContent = `
name: Generate stats card

on:
  schedule: # execute every 12 hours
    - cron: "* */12 * * *"

  workflow_dispatch:

  push:
    branches:
    - main

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: generate stats.svg
        uses: readme-tools/github-readme-stats-action@v1
        with:
          card: stats
          options: ${options}
          path: dist/stats.svg
          token: ${'${{ secrets.GITHUB_TOKEN }}'}


      - name: push stats.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: stats-output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${'${{ secrets.GITHUB_TOKEN }}'}
`.trim();

  return {
    file: 'stats.yml',
    content: workflowContent,
  };
};

export { statsWorkflowFile };
