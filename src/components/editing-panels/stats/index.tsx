import { inputMap } from 'components';

import { fields } from './contents';
import * as S from './styles';

const StatsEditPanel = () => {
  return (
    <S.Container>
      {fields.map(field => {
        const Input = inputMap[field.type];

        return (
          <Input
            key={field.path}
            label={field.label}
            path={field.path}
            {...field.props}
          />
        );
      })}
    </S.Container>
  );
};

export { StatsEditPanel };
