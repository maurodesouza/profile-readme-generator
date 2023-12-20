import { createContext, useEffect, useRef, useState } from 'react';
import { events } from 'app';

import { Events, Extension, ExtensionsGroup } from 'types';

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

  const handleRegisterExtension = (event: CustomEvent<Extension[]>) => {
    const newRegisters = event.detail.reduce((registers, extension) => {
      return { ...registers, [extension.id]: extension };
    }, registersRef.current);

    registersRef.current = newRegisters;

    const extensions = Object.values(newRegisters).reduce((obj, extension) => {
      Object.entries(extension.presentation).forEach(([key, item]) => {
        const curExtension = obj[key] || {};

        obj[key] = {
          ...curExtension,
          [extension.id]: item,
        };
      });

      return obj;
    }, {} as ExtensionsGroup);

    setExtensions(extensions);
    setRegisters(newRegisters);
  };

  useEffect(() => {
    events.on(Events.REGISTER_EXTENSION, handleRegisterExtension);

    return () => {
      events.off(Events.REGISTER_EXTENSION, handleRegisterExtension);
    };
  }, [registers]);

  return (
    <ExtensionsContext.Provider value={{ extensions }}>
      {children}
    </ExtensionsContext.Provider>
  );
};

export { ExtensionsProvider, ExtensionsContext };
