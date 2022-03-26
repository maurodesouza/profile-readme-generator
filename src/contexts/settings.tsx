import { events } from '@events/base';
import { createContext, useEffect, useState } from 'react';
import { Events } from 'types';
import { deepChangeObjectProperty } from 'utils';

type HandleEditSettingsArgs = CustomEvent<{
  path: string;
  value: unknown;
}>;

type Settings = {
  user: Record<string, unknown>;
};

type SettingsContextData = {
  settings: Settings;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

const INITIAL_SETTINGS = {
  user: {},
};

const SettingsContext = createContext<SettingsContextData>(
  {} as SettingsContextData
);

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Settings>(INITIAL_SETTINGS);

  const handleEdit = (event: HandleEditSettingsArgs) => {
    const { path, value } = event.detail;

    const result = deepChangeObjectProperty<Settings>({
      obj: settings,
      path,
      value,
    });

    setSettings(result);
  };

  useEffect(() => {
    events.on(Events.SETTINGS_EDIT, handleEdit);

    return () => {
      events.off(Events.SETTINGS_EDIT, handleEdit);
    };
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };
