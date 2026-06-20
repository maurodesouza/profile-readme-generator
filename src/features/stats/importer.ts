import { CanvasSection, Sections } from 'types';
import type { Element } from 'hast';
import { v4 as uuid } from 'uuid';
import { defaultStatsSectionConfig } from './default-config';
import { deepChangeObjectProperty } from 'utils/deepChangeObjectProperty';
import { general } from 'config/general';

type GraphType = keyof typeof defaultStatsSectionConfig.props.content.graphs;
type GraphConfig = Record<GraphType, Record<string, unknown>>;

function mergeParamsToConfig(
  params: URLSearchParams,
  config: Record<string, unknown>
): Record<string, unknown> {
  for (const [key, value] of params.entries()) {
    if (value === 'true') {
      config[key] = true;
    } else if (value === 'false') {
      config[key] = false;
    } else if (!isNaN(Number(value))) {
      config[key] = Number(value);
    } else {
      config[key] = value;
    }
  }
  return config;
}

function applyGraphFromUrl(
  graphs: GraphConfig,
  graphType: GraphType,
  src: string,
  height: number
) {
  if (!graphs[graphType]) return;

  const params = new URL(src).searchParams;
  const graphConfig = mergeParamsToConfig(params, { ...graphs[graphType] });

  graphs[graphType] = { ...graphConfig, show: true, height };
}

export function statsImporter(statsDiv: Element): CanvasSection | null {
  const images = statsDiv.children.filter(
    child =>
      child.type === 'element' &&
      child.tagName.toLowerCase() === 'img' &&
      child.properties['src'] &&
      child.properties['alt']
  );

  if (images.length === 0) return null;

  const defaultConfig = structuredClone(defaultStatsSectionConfig);

  const graphs = defaultConfig.props.content.graphs as GraphConfig;
  const graphTypes = Object.keys(graphs) as GraphType[];

  for (const graphType of graphTypes) {
    graphs[graphType] = deepChangeObjectProperty({
      obj: graphs[graphType],
      path: 'show',
      value: false,
    });
  }

  for (let image of images) {
    image = image as Element;
    const src: string = image.properties['src'] as string;
    const height = (image.properties['height'] as number) || 150;

    // Check for GitHub Actions-generated URLs (raw.githubusercontent.com)
    const workflowMatch = src.match(
      /raw\.githubusercontent\.com\/[^/]+\/[^/]+\/([^/]+)\/[^/]+\.svg/
    );

    if (workflowMatch) {
      const [, branch] = workflowMatch;

      const graphType = branch.replace('-output', '') as GraphType;
      if (graphType) applyGraphFromUrl(graphs, graphType, src, height);

      continue;
    }

    const urls = general.urls.sections.stats;

    if (src.startsWith(urls.streakBaseUrl))
      applyGraphFromUrl(graphs, 'streak', src, height);
  }

  defaultConfig.props.styles.align =
    (statsDiv.properties['align'] as string) || 'center';

  return {
    id: uuid(),
    type: Sections.STATS,
    ...defaultConfig,
  } as CanvasSection;
}
