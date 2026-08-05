import { useEffect } from 'react';

import { command } from 'lib/command';
import { settingsStore } from 'stores/settings-store';

export function SettingsHandle() {
  function handleEdit({ path, value }: { path: string; value: unknown }) {
    settingsStore.edit(path, value);
  }

  function handleSettingsPreviewApply() {
    settingsStore.applyPreview();
  }

  function handleSettingsPreviewReset() {
    settingsStore.resetPreview();
  }

  useEffect(() => {
    const disposes = [
      command.handle('settings.edit', handleEdit),
      command.handle('settings.preview.apply', handleSettingsPreviewApply),
      command.handle('settings.preview.reset', handleSettingsPreviewReset),
    ];

    return () => {
      disposes.forEach(dispose => dispose());
    };
  }, []);

  return null;
}
