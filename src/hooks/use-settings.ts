import { useContext } from 'react';
import { SettingsContext } from 'contexts';

export const useSettings = () => useContext(SettingsContext);
