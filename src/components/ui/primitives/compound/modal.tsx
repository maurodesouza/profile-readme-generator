import React, { useEffect, useState } from 'react';

import { Renderable } from 'types';
import { command, actions } from 'lib/command';

import { Dialog } from '../atoms/dialog';
import { FlexibleRender } from 'components/helpers/flexible-render';

export function Modal() {
  const [Modal, setModal] = useState<Renderable>();

  function onOpenModal(modal: Renderable) {
    setModal(modal);
  }

  function onCloseModal() {
    setModal(undefined);
  }

  useEffect(() => {
    const disposes = [
      command.handle('modal.open', onOpenModal),
      command.handle('modal.close', onCloseModal),
    ];

    return () => {
      disposes.forEach(dispose => dispose());
    };
  }, []);

  return (
    <Dialog.Provider open={!!Modal} onOpenChange={actions.modal.close}>
      <FlexibleRender render={Modal} />
    </Dialog.Provider>
  );
}
