import { CanvasHandle } from './canvas';
import { ExtensionsHandle } from './extensions';
import { SettingsHandle } from './settings';
import { ThemeHandler } from './theme';

export function Handles() {
  return (
    <>
      <CanvasHandle />
      <SettingsHandle />
      <ExtensionsHandle />
      <ThemeHandler />
    </>
  );
}
