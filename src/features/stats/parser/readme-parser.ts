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

export type StatsSectionParserArgs = {
  content: Content;
  styles: SectionStyles;
};

const WORKFLOW_OUTPUT_BRANCH: Record<string, string> = {
  stats: 'stats-output',
  trophy: 'trophy-output',
  'activity-graph': 'activity-graph-output',
};

const WORKFLOW_GRAPH_FILES: Partial<Record<Graphs, string>> = {
  stats: 'stats.svg',
  trophy: 'trophy.svg',
  'activity-graph': 'activity-graph.svg',
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

      const workflowFile = WORKFLOW_GRAPH_FILES[graph];

      let img: string;

      if (workflowFile) {
        const branch = WORKFLOW_OUTPUT_BRANCH[graph];
        const fullUrl = `https://raw.githubusercontent.com/${github}/${github}/${branch}/${workflowFile}`;

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

export { statsSectionParser };
