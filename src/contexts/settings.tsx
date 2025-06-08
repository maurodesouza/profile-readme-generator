import { createContext, useEffect } from 'react';

import { config } from 'app';
import { events } from '@events';
import { deepChangeObjectProperty } from 'utils';

import { Events, Settings } from 'types';
import { useCanvas, usePersistedState } from 'hooks';

type HandleEditSettingsArgs = CustomEvent<{
  path: string;
  value: unknown;
}>;

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
