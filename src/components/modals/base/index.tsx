import { Icon } from 'components/ui/primitives/atoms/icon';

import { events } from 'app';
import * as S from './styles';

type BaseModalProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
};

const BaseModal = ({ children, title }: BaseModalProps) => {
  return (
    <S.Container>
      <S.Header>
        {title && <S.Title>{title}</S.Title>}

        <S.CloseButton onClick={events.modal.close}>
          <Icon name="x" size={24} />
        </S.CloseButton>
      </S.Header>

      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export { BaseModal };
