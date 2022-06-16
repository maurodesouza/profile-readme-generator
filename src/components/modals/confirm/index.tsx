import { events } from 'app';
import { BaseModal } from '../base';

import * as S from './styles';

const ConfirmModal = () => {
  return (
    <BaseModal title="Are you sure you want to delete the created README?">
      <S.Container>
        <p>Upon confirming, you will delete the README you created.</p>
        <S.Container>
          <S.Row>
            <S.ButtonCancel onClick={events.modal.close}>Cancel</S.ButtonCancel>
            <S.Button onDelete onClick={events.canvas.clear}>
              Yes, I am sure.
            </S.Button>
          </S.Row>
        </S.Container>
      </S.Container>
    </BaseModal>
  );
};

export { ConfirmModal };
