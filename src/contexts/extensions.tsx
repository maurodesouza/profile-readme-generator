import { createContext, useEffect, useRef, useState } from 'react';

import { Extension, ExtensionsGroup } from 'types';
import { command } from 'lib/command';

type ExtensionsContextData = {
  extensions: ExtensionsGroup;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

const ExtensionsContext = createContext<ExtensionsContextData>(
  {} as ExtensionsContextData
);

const ExtensionsProvider = ({ children }: SettingsProviderProps) => {
  const registersRef = useRef<Record<string, Extension>>({});

  const [extensions, setExtensions] = useState<ExtensionsGroup>({});
  const [registers, setRegisters] = useState<Record<string, Extension>>({});

  const handleRegisterExtension = (newExtensions: Extension | Extension[]) => {
    const extensionsToRegister = Array.isArray(newExtensions)
      ? newExtensions
      : [newExtensions];

    const newRegisters = extensionsToRegister.reduce((registers, extension) => {
      return { ...registers, [extension.id]: extension };
    }, registersRef.current);

    registersRef.current = newRegisters;

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

    setExtensions(nextExtensions);
    setRegisters(newRegisters);
  };

  useEffect(() => {
    const dispose = command.handle(
      'extensions.register',
      handleRegisterExtension
    );

    return () => {
      dispose();
    };
  }, [registers]);

  return (
    <ExtensionsContext.Provider value={{ extensions }}>
      {children}
    </ExtensionsContext.Provider>
  );
};

export { ExtensionsProvider, ExtensionsContext };
