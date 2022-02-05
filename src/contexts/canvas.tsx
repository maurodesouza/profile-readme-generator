import { createContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { events } from '@events/index';
import { CanvasContent, Events } from 'types';

type HandleAddContentArgs = CustomEvent<Omit<CanvasContent, 'id'>>;

type CanvasContextData = {
  contents: CanvasContent[];
};

type CanvasProviderProps = {
  children: React.ReactNode;
};

const CanvasContext = createContext<CanvasContextData>({} as CanvasContextData);

const CanvasProvider = ({ children }: CanvasProviderProps) => {
  const [contents, setContents] = useState<CanvasContent[]>([]);

  const handleAddContent = (event: HandleAddContentArgs) => {
    const newContent = {
      id: uuid(),
      ...event.detail,
    };

    setContents(state => [...state, newContent]);
  };

  const handleRemoveContent = (event: CustomEvent<string>) => {
    setContents(state => state.filter(item => item.id !== event.detail));
  };

  useEffect(() => {
    events.on(Events.CANVAS_ADD_CONTENT, handleAddContent);
    events.on(Events.CANVAS_REMOVE_CONTENT, handleRemoveContent);

    return () => {
      events.off(Events.CANVAS_ADD_CONTENT, handleAddContent);
      events.off(Events.CANVAS_REMOVE_CONTENT, handleRemoveContent);
    };
  }, []);

  return (
    <CanvasContext.Provider value={{ contents }}>
      {children}
    </CanvasContext.Provider>
  );
};

export { CanvasContext, CanvasProvider };
