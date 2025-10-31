import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import type { Element } from 'hast';
import { CanvasSection } from 'types';
import { techsImporter } from 'features/techs/importer';
import { socialsImporter } from 'features/socials/importer';
import { Sections } from 'types';
import { textImporter } from 'features/text/importer';
import { statsImporter } from 'features/stats/importer';
import { snakeImporter } from 'features/snake/importer';
import { profileViewsImporter } from 'features/profile-views/importer';
import { pacmanImporter } from 'features/pacman/importer';
import { musicImporter } from 'features/music/importer';
import { imageImporter } from 'features/image/importer';
import { activitiesImporter } from 'features/activities/importer';
import { borderImporter } from 'features/border/importer';

const DATA_IMPORTER_ATTR = 'dataImporter';

const parseImportedReadme = async (
  content: string
): Promise<CanvasSection[]> => {
  const tree = await _parseMarkdownWithHtml(content);
  const sections: CanvasSection[] = [];

  for (const child of tree.children) {
    if (child.type !== 'element') continue;
    if (!child.properties[DATA_IMPORTER_ATTR]) continue;

    const importType = child.properties[DATA_IMPORTER_ATTR];
    const data = _generateSectionFromImport(importType as string, child);

    if (data !== null) {
      sections.push(data);
    }
  }

  return sections;
};

async function _parseMarkdownWithHtml(markdownText: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw);

  const vfile = await processor.parse(markdownText);
  const hastTree = await processor.run(vfile);
  return hastTree;
}

const _generateSectionFromImport = (
  type: string,
  content: Element
): CanvasSection | null => {
  if (!importers[type]) return null;
  return importers[type](content);
};

const importers: Record<string, (e: Element) => CanvasSection | null> = {
  [Sections.TECHS]: techsImporter,
  [Sections.SOCIALS]: socialsImporter,
  [Sections.TEXT]: textImporter,
  [Sections.STATS]: statsImporter,
  [Sections.SNAKE]: snakeImporter,
  [Sections.PROFILE_VIEWS]: profileViewsImporter,
  [Sections.PACMAN]: pacmanImporter,
  [Sections.MUSIC]: musicImporter,
  [Sections.IMAGE]: imageImporter,
  [Sections.BORDER]: borderImporter,
  [Sections.ACTIVITIES]: activitiesImporter,
};

export { parseImportedReadme };
