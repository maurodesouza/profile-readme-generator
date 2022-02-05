import { useContext } from 'react';

import { CanvasContext } from 'contexts';

export const useCanvas = () => useContext(CanvasContext);
