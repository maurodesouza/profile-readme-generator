import { createContext, useEffect } from 'react';

import { config } from 'config';
import { deepChangeObjectProperty } from 'utils';

import { Settings } from 'types';
import { useCanvas, usePersistedState } from 'hooks';
import { command } from 'lib/command';

type HandleEditSettingsArgs = {
  path: string;
  value: unknown;
};

type SettingsContextData = {
  settings: Settings;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

const { preview: PREVIEW_SETTINGS, initial: INITIAL_SETTINGS } =
  config.general.settings;

const SettingsContext = createContext<SettingsContextData>(
  {} as SettingsContextData
);

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = usePersistedState<Settings>(
    'user.settings',
    INITIAL_SETTINGS
  );

  const { previewMode } = useCanvas();

  const handleEdit = ({ path, value }: HandleEditSettingsArgs) => {
    const result = deepChangeObjectProperty<Settings>({
      obj: settings,
      path,
      value,
    });

    setSettings(result);
  };

  useEffect(() => {
    const dispose = command.handle('settings.edit', handleEdit);

    return () => {
      dispose();
    };
  }, [settings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: { ...settings, ...(previewMode && PREVIEW_SETTINGS) },
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };
