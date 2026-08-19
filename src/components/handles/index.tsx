import { CanvasHandle } from './canvas';
import { ExtensionsHandle } from './extensions';
import { LocaleHandler } from './locale';
import { SettingsHandle } from './settings';
import { ThemeHandler } from './theme';

export function Handles() {
  return (
    <>
      <CanvasHandle />
      <SettingsHandle />
      <ExtensionsHandle />
      <ThemeHandler />
      <LocaleHandler />
    </>
  );
}
