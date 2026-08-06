import { useEffect } from 'react';

import { Extension, ExtensionsGroup } from 'types';
import { command } from 'lib/command';
import { extensionsStore } from 'stores/extensions-store';

export function ExtensionsHandle() {
  function handleRegisterExtension(newExtensions: Extension | Extension[]) {
    const extensionsToRegister = Array.isArray(newExtensions)
      ? newExtensions
      : [newExtensions];

    const newRegisters = extensionsToRegister.reduce(
      (registers, extension) => ({
        ...registers,
        [extension.id]: extension,
      }),
      extensionsStore.registers
    );

    const nextExtensions = Object.values(newRegisters).reduce(
      (obj, extension) => {
        Object.entries(extension.presentation).forEach(([key, item]) => {
          const curExtension = obj[key] || {};

          obj[key] = {
            ...curExtension,
            [extension.id]: item,
          };
        });

        return obj;
      },
      {} as ExtensionsGroup
    );

    extensionsStore.registers = newRegisters;
    extensionsStore.extensions = nextExtensions;
  }

  useEffect(() => {
    const dispose = command.handle(
      'extensions.register',
      handleRegisterExtension
    );

    return () => {
      dispose();
    };
  }, []);

  return null;
}
