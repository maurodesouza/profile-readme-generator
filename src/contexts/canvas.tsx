import { createContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { events } from '@events/index';
import { Sections, CanvasSection, Events } from 'types';

import { defaultSectionProps } from 'config';
import { deepChangeObjectProperty } from 'utils';

type HandleAddSectionArgs = CustomEvent<Sections>;
type HandleEditSectionArgs = CustomEvent<{
  id?: string;
  path: string;
  value: unknown;
}>;

type CanvasContextData = {
  sections: CanvasSection[];
  currentSection?: CanvasSection;
};

type CanvasProviderProps = {
  children: React.ReactNode;
};

const CanvasContext = createContext<CanvasContextData>({} as CanvasContextData);

const CanvasProvider = ({ children }: CanvasProviderProps) => {
  const [sections, setSections] = useState<CanvasSection[]>([]);
  const [currentSection, setCurrentSection] = useState<CanvasSection>();

  const handleAddSection = (event: HandleAddSectionArgs) => {
    const sectionType = event.detail;
    const defaultProps = defaultSectionProps[sectionType];

    const newSection = {
      id: uuid(),
      type: event.detail,
      ...defaultProps,
    };

    setSections(state => [...state, newSection]);
  };

  const handleEditSection = (event: HandleEditSectionArgs) => {
    const { id = currentSection!.id, path, value } = event.detail;

    const obj = sections.find(item => item.id === id)!;

    const result = deepChangeObjectProperty<CanvasSection>({
      obj,
      path,
      value,
    });

    setSections(state =>
      state.map(item => {
        if (item.id === id) return result;
        return item;
      })
    );

    const isEditingCurrentSection = currentSection!.id === id;

    isEditingCurrentSection && setCurrentSection(result);
  };

  const handleRemoveSection = (event: CustomEvent<string>) => {
    setSections(state => state.filter(item => item.id !== event.detail));
  };

  const handleSetCurrentSection = (event: CustomEvent<string>) => {
    const id = event.detail;

    const result = sections.find(item => item.id === id);

    setCurrentSection(result);
  };

  useEffect(() => {
    events.on(Events.CANVAS_ADD_SECTION, handleAddSection);
    events.on(Events.CANVAS_EDIT_SECTION, handleEditSection);
    events.on(Events.CANVAS_REMOVE_SECTION, handleRemoveSection);
    events.on(Events.CANVAS_SET_CURRENT_SECTION, handleSetCurrentSection);

    return () => {
      events.off(Events.CANVAS_ADD_SECTION, handleAddSection);
      events.off(Events.CANVAS_EDIT_SECTION, handleEditSection);
      events.off(Events.CANVAS_REMOVE_SECTION, handleRemoveSection);
      events.off(Events.CANVAS_SET_CURRENT_SECTION, handleSetCurrentSection);
    };
  }, [sections, currentSection]);

  return (
    <CanvasContext.Provider value={{ sections, currentSection }}>
      {children}
    </CanvasContext.Provider>
  );
};

export { CanvasContext, CanvasProvider };
