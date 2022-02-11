import { objectToQueryParams } from 'utils';

import { urls } from './urls';
import * as S from './styles';

type StatsSectionProps = {
  content: any;
};

const StatsSection = ({ content }: StatsSectionProps) => {
  const { graphs, styles, from } = content;

  return (
    <S.Container {...styles}>
      {Object.entries(urls).map(([key, { url, alt }]) => {
        const graph = graphs[key];

        if (!graph) return null;

        const { height = '', ...props } = { ...from, ...graph };
        const fullUrl = `${url}?${objectToQueryParams(props)}`;

        return <img height={height || 150} key={key} src={fullUrl} alt={alt} />;
      })}
    </S.Container>
  );
};

export { StatsSection };
