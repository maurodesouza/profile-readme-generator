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

const languagesWorkflowFile = ({
  content,
}: StatsSectionParserArgs): TFile | null => {
  const graphs = content?.graphs as Record<string, Obj> | undefined;
  const languages = graphs?.languages;

  if (!languages?.show) return null;

  const options = buildStatsWorkflowOptions(languages);

  const workflowContent = `
name: Generate languages card

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
      - name: generate languages.svg
        uses: readme-tools/github-readme-stats-action@v1
        with:
          card: top-langs
          options: ${options}
          path: dist/languages.svg
          token: ${'${{ secrets.GITHUB_TOKEN }}'}


      - name: push languages.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: languages-output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${'${{ secrets.GITHUB_TOKEN }}'}
`.trim();

  return {
    file: 'languages.yml',
    content: workflowContent,
  };
};

export { languagesWorkflowFile };
