import { inputMap } from 'components';
import { Container } from '../@base';

import { fields } from './fields';
import * as S from './styles';

const Stats = () => {
  return (
    <Container>
      {fields.map(field => {
        const Input = inputMap[field.type];

        return (
          <S.Field key={field.path}>
            <Input label={field.label} path={field.path} {...field.props} />
          </S.Field>
        );
      })}
    </Container>
  );
};

export { Stats };
