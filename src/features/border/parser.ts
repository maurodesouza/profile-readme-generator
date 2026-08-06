import { url } from '#/utils/url';
import { Params, Sections } from '#/types';


type Borders = Parameters<typeof url.getBorder>[0];

type Content = {
  provider: Borders;
  borders: {
    [key in Borders]: Params;
  };
};

type BorderSectionParserArgs = {
  content: Content;
  styles: object;
};

const borderSectionParser = ({ content }: BorderSectionParserArgs) => {
  const { borders, provider } = content;

  const srcUrl = url.getBorder(provider, borders[provider]);

  return `
    <div data-importer="${Sections.BORDER}">
      <img style="100%" src="${srcUrl}" />
    </div>
  `;
};

export { borderSectionParser };
