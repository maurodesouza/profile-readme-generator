import { useEffect, useState } from 'react';

import { events } from 'app';
import { Events, Modals } from 'types';

import { modals } from './modals';
import * as S from './styles';

const Modal = () => {
  const [modal, setModal] = useState<Modals>();
  const Modal = modals[modal!] || (() => <></>);

  const handleChangeModal = (event: CustomEvent<Modals>) =>
    setModal(event.detail);

  const handleCloseModal = () => setModal(undefined);

  useEffect(() => {
    events.on(Events.MODAL_OPEN, handleChangeModal);
    events.on(Events.MODAL_CLOSE, handleCloseModal);

    return () => {
      events.off(Events.MODAL_OPEN, handleChangeModal);
      events.off(Events.MODAL_CLOSE, handleCloseModal);
    };
  }, []);

  return (
    <S.Container open={!!modal}>
      <S.Content>
        <Modal />
      </S.Content>

      <S.Overlay onClick={events.modal.close} />
    </S.Container>
  );
};

export { Modal };
