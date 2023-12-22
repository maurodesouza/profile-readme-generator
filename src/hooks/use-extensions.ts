import { useContext } from 'react';
import { ExtensionsContext } from 'contexts';

export const useExtensions = () => useContext(ExtensionsContext);
