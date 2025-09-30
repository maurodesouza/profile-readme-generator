import { Params } from 'types';
import { getBorderUrl } from 'utils/getBorderUrl';

type Borders = Parameters<typeof getBorderUrl>[0];

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

  const url = getBorderUrl(provider, borders[provider]);

  return `
    <div>
      <img style="100%" src="${url}" />
    </div>
  `;
};

export { borderSectionParser };
