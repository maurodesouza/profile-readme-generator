import { objectToQueryParams } from 'utils';

import { urls } from './urls';
import * as S from './styles';

type StatsBlockProps = {
  content: any;
};

const StatsBlock = ({ content }: StatsBlockProps) => {
  const { graphs, styles, from } = content;

  return (
    <S.Container {...styles}>
      {Object.entries(urls).map(([key, { url, alt }]) => {
        const graph = graphs[key];

        if (!graph) return null;

        const { height = '150px', ...props } = { ...from, ...graph };
        const fullUrl = `${url}?${objectToQueryParams(props)}`;

        return <img height={height} key={key} src={fullUrl} alt={alt} />;
      })}
    </S.Container>
  );
};

export { StatsBlock };
