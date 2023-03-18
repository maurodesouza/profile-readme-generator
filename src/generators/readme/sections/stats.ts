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

type GenerateStatsSectionArgs = {
  content: Content;
  styles: SectionStyles;
};

const generateStatsSection = (
  { content, styles }: GenerateStatsSectionArgs,
  settings: Settings
) => {
  const { graphs } = content;
  const { align, direction } = styles;
  const { github } = settings.user;

  const imgsHtml = (Object.entries(graphs) as [Graphs, Obj][])
    .filter(([, props]) => props.show)
    .reduce((html, [graph, props], index, arr) => {
      const url = getStatsUrl(graph as Graphs, github!);

      const { height = 150, ...rest } = { ...props };

      Reflect.deleteProperty(rest, 'show');

      const fullUrl = `${url}&${objectToQueryParams(rest as Obj)}`;
      const toAddBr = direction === 'column' && index + 1 !== arr.length;

      const img = `<img src="${fullUrl}" height="${height}" alt="${graph} graph" />`;
      const br = toAddBr ? '<br>' : '';

      return `${html} \n ${img} ${br}`;
    }, '')
    .trim();

  return `
    <div align="${align}">
      ${imgsHtml}
    </div>
  `;
};

export { generateStatsSection };
