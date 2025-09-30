import { config } from 'config';
import { Params } from 'types';
import { objectToQueryParams } from 'utils/objectToQueryParams';

const { capsuleRenderBaseUrl } = config.general.urls.sections.borders;

type CustomColorProps =
  | {
      type: 'theme';
      theme: string;
    }
  | {
      type: 'custom-gradient';
      'custom-gradient': string;
    }
  | {
      type: 'static';
      static: string;
    };

export type CapsuleRenderParams = Params & {
  strokeWidth?: number;
  color?:
    | {
        type: 'random' | 'gradient';
      }
    | CustomColorProps;
};

const urls = {
  'capsule-render': `${capsuleRenderBaseUrl}?`,
};

const parameters = {
  'capsule-render': (params?: CapsuleRenderParams) => {
    const { color, ...rest } = params ?? {};

    if (rest.strokeWidth !== undefined && Number(rest.strokeWidth) === 0) {
      rest.stroke = '-';
    }

    if (!color) return params ?? {};

    switch (color.type) {
      case 'random':
      case 'gradient':
        return {
          ...rest,
          color: color.type,
        };

      case 'theme':
        return {
          ...rest,
          theme: color.theme,
        };
      case 'custom-gradient':
        return {
          ...rest,
          color: color['custom-gradient'],
        };
      case 'static':
        return {
          ...rest,
          color: color.static,
        };
    }
  },
};

export function getBorderUrl(type: keyof typeof urls, params?: Params) {
  return `${urls[type]}${objectToQueryParams(parameters[type](params))}`;
}
