import { Settings } from 'types';
import { getStatsUrl, objectToQueryParams } from 'utils';

type Obj = Record<string, unknown>;
type Graphs = Parameters<typeof getStatsUrl>[0];

type Content = {
  graphs: Record<Graphs, Obj>;
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
  direction: 'row' | 'column';
};

type StatsSectionParserArgs = {
  content: Content;
  styles: SectionStyles;
};

const STATS_WORKFLOW_BRANCH = 'output';
const STATS_WORKFLOW_FILE = 'stats.svg';

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

const statsSectionParser = (
  { content, styles }: StatsSectionParserArgs,
  settings: Settings
) => {
  const { graphs } = content;
  const { align, direction } = styles;
  const { github } = settings.user;

  const imgsHtml = (Object.entries(graphs) as [Graphs, Obj][])
    .filter(([, props]) => props.show)
    .reduce((html, [graph, props], index, arr) => {
      const { height = 150, ...rest } = { ...props };

      Reflect.deleteProperty(rest, 'show');

      const toAddBr = direction === 'column' && index + 1 !== arr.length;
      const br = toAddBr ? '<br>' : '';

      let img: string;

      if (graph === 'stats') {
        const fullUrl = `https://raw.githubusercontent.com/${github}/${github}/${STATS_WORKFLOW_BRANCH}/${STATS_WORKFLOW_FILE}`;

        img = `<img src="${fullUrl}" height="${height}" alt="${graph} graph" />`;
      } else {
        const url = getStatsUrl(graph as Graphs, github!);
        const fullUrl = `${url}&${objectToQueryParams(rest as Obj)}`;

        img = `<img src="${fullUrl}" height="${height}" alt="${graph} graph" />`;
      }

      return `${html} \n ${img} ${br}`;
    }, '')
    .trim();

  return `
    <div align="${align}">
      ${imgsHtml}
    </div>
  `;
};

const statsWorkflowParser = ({ content }: StatsSectionParserArgs) => {
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
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${'${{ secrets.GITHUB_TOKEN }}'}
`.trim();

  return {
    file: 'stats.yml',
    content: workflowContent,
  };
};

export { statsSectionParser, statsWorkflowParser };
