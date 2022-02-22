import { getStatsUrl, objectToQueryParams } from 'utils';

type Obj = Record<string, unknown>;
type Graphs = Parameters<typeof getStatsUrl>[0];

type Content = {
  graphs: Record<Graphs, Obj>;
  from: Obj;
};

type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type GenerateStatsSectionArgs = {
  content: Content;
  styles: SectionStyles;
};

const generateStatsSection = ({
  content,
  styles,
}: GenerateStatsSectionArgs) => {
  const { graphs, from } = content;
  const { align } = styles;

  const imgsHtml = Object.entries(graphs)
    .reduce((html, [graph, props]) => {
      const url = getStatsUrl(graph as Graphs);

      const { height = 150, ...rest } = { ...from, ...props };
      const fullUrl = `${url}?${objectToQueryParams(rest as Obj)}`;

      const img = `<img src="${fullUrl}" height="${height}" alt="${graph} graph" />`;

      return `${html} \n ${img}`;
    }, '')
    .trim();

  return `
    <div align="${align}>
      ${imgsHtml}
    </div>
  `.trim();
};

export { generateStatsSection };
