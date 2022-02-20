import { objectToQueryParams } from 'utils';

import { urls } from './urls';
import * as S from './styles';

type SectionStyles = {
  align: 'left' | 'center' | 'right';
};
type StatsSectionProps = {
  content: any;
  styles: SectionStyles;
};

const StatsSection = ({
  content,
  styles: containerStyles,
}: StatsSectionProps) => {
  const { graphs, from } = content;

  return (
    <S.Container {...containerStyles}>
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
