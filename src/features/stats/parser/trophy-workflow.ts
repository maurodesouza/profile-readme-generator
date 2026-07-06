import { TFile } from '#/components/atoms/tree';

import { StatsSectionParserArgs } from './readme-parser';

type Obj = Record<string, unknown>;

const PANEL_TO_ACTION_KEY: Record<string, string> = {
  theme: 'theme',
  column: 'max-cols',
  row: 'max-rows',
  'margin-w': 'margin-width',
  'margin-h': 'margin-height',
  'no-bg': 'no-background',
  'no-frame': 'no-frame',
};

const buildTrophyWithBlock = (props: Obj) => {
  const indent = '          ';

  return Object.entries(PANEL_TO_ACTION_KEY).reduce(
    (lines, [panelKey, actionKey]) => {
      const value = props[panelKey];

      if (value === undefined || value === null || value === '') return lines;
      if (panelKey === 'column' && Number(value) === -1) return lines;

      const line = `${indent}${actionKey}: ${String(value)}`;

      return lines ? `${lines}\n${line}` : line;
    },
    ''
  );
};

const trophyWorkflowFile = ({
  content,
}: StatsSectionParserArgs): TFile | null => {
  const graphs = content?.graphs as Record<string, Obj> | undefined;
  const trophy = graphs?.trophy;

  if (!trophy?.show) return null;

  const dynamicWith = buildTrophyWithBlock(trophy);

  const workflowContent = `
name: Generate trophy card

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
      - name: generate trophy.svg
        uses: Erik-Donath/github-profile-trophy@feature/generate-svg
        with:
          username: ${'${{ github.repository_owner }}'}
          file: dist/trophy.svg
          token: ${'${{ secrets.GITHUB_TOKEN }}'}
${dynamicWith}

      - name: push trophy.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: trophy-output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${'${{ secrets.GITHUB_TOKEN }}'}
`.trim();

  return {
    file: 'trophy.yml',
    content: workflowContent,
  };
};

export { trophyWorkflowFile };
