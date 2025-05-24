import React, { useEffect, useState } from 'react';

import { events } from 'app';
import { Events, Renderable } from 'types';

import { Dialog } from '../atoms/dialog';
import { FlexibleRender } from 'components/helpers/flexible-render';

export function Modal() {
  const [Modal, setModal] = useState<Renderable>();

  function onOpenModal(event: CustomEvent<Renderable>) {
    setModal(event.detail);
  }

  function onCloseModal() {
    setModal(undefined);
  }

  useEffect(() => {
    events.on(Events.MODAL_OPEN, onOpenModal);
    events.on(Events.MODAL_CLOSE, onCloseModal);

    return () => {
      events.off(Events.MODAL_OPEN, onOpenModal);
      events.off(Events.MODAL_CLOSE, onCloseModal);
    };
  }, []);

  return (
    <Dialog.Provider open={!!Modal} onOpenChange={events.modal.close}>
      <FlexibleRender render={Modal} />
    </Dialog.Provider>
  );
}
