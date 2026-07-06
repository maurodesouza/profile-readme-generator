import { createContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Sections, CanvasSection, PanelsEnum } from 'types';

import { deepChangeObjectProperty, parseImportedReadme } from 'utils';
import { useExtensions, usePersistedState } from 'hooks';
import { actions, command } from 'lib/command';

type CanvasContextData = {
  sections: CanvasSection[];
  currentSection?: CanvasSection;
  previewMode: boolean;
};

type CanvasProviderProps = {
  children: React.ReactNode;
};

const CanvasContext = createContext<CanvasContextData>({} as CanvasContextData);

const CanvasProvider = ({ children }: CanvasProviderProps) => {
  const [sections, setSections] = usePersistedState<CanvasSection[]>(
    'canvas.sections',
    []
  );

  const [currentSection, setCurrentSection] = useState<CanvasSection>();
  const [previewTemplate, setPreviewTemplate] = useState<CanvasSection[]>([]);

  const { extensions } = useExtensions();

  const handleAddSection = (sectionType: Sections) => {
    const sectionData = extensions.sections[sectionType] as Record<string, any>;

    const newSection = {
      id: uuid(),
      type: sectionType,
      ...sectionData.defaultConfig,
    };

    setSections(state => [...state, newSection]);
  };

  const loadReadmeFile = async () => {
    document.getElementById('readme-file-import')?.click();
  };

  const importReadme = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (!file) return; // TODO: toast error event
    const text = await file.text();
    const sections = await parseImportedReadme(text);
    handleClearCanvas();
    setSections(sections);
  };

  const handleEditSection = ({
    id = currentSection?.id,
    path,
    value,
  }: {
    id?: string;
    path: string;
    value: unknown;
  }) => {
    if (!id) return;

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

    const isEditingCurrentSection = currentSection?.id === id;

    isEditingCurrentSection && setCurrentSection(result);
  };

  const handleRemoveSection = (sectionId: string) => {
    setSections(state => state.filter(item => item.id !== sectionId));

    if (sectionId === currentSection?.id) actions.panel.clear('right');
  };

  const handleSetCurrentSection = (id: string) => {
    const result = sections.find(item => item.id === id);

    actions.panel.show({ side: 'right', panel: result!.type });
    setCurrentSection(result);
  };

  const handleReorderSections = (order: string[]) => {
    const sectionsReordered = order.map(
      sectionId => sections.find(section => section.id === sectionId)!
    );

    setSections(sectionsReordered);
  };

  const handleDuplicateSection = (id: string) => {
    const newSections = sections.reduce((arr, section) => {
      if (section.id === id) {
        const duplicate = {
          ...section,
          id: uuid(),
        };

        return [...arr, section, duplicate];
      }

      return [...arr, section];
    }, [] as CanvasSection[]);

    setSections(newSections);
  };

  function moveSectionUp(id: string) {
    const index = sections.findIndex(section => section.id === id);

    if (index === 0) return;

    const newSections = [...sections];

    const temp = newSections[index - 1];
    newSections[index - 1] = newSections[index];
    newSections[index] = temp;

    setSections(newSections);
  }

  function moveSectionDown(id: string) {
    const index = sections.findIndex(section => section.id === id);

    if (index + 1 === sections.length) return;

    const newSections = [...sections];

    const temp = newSections[index + 1];
    newSections[index + 1] = newSections[index];
    newSections[index] = temp;

    setSections(newSections);
  }

  const handleUseTemplate = () => {
    setSections(previewTemplate);
    setPreviewTemplate([]);
  };

  const handlePreviewTemplate = (template?: CanvasSection[]) => {
    const mappedTemplate = (template ?? []).map(section => ({
      ...section,
      id: uuid(),
    }));

    setPreviewTemplate(mappedTemplate);
  };

  const handleClearCanvas = () => {
    setSections([]);
    actions.panel.show({
      side: 'right',
      panel: PanelsEnum.RECOMMENDED_RESOURCES,
    });
  };

  useEffect(() => {
    const disposes = [
      command.handle('canvas.edit', handleEditSection),
      command.handle('canvas.remove', handleRemoveSection),
      command.handle('canvas.setCurrentSection', handleSetCurrentSection),
      command.handle('canvas.reorder', handleReorderSections),
      command.handle('canvas.duplicate', handleDuplicateSection),
      command.handle('canvas.clear', handleClearCanvas),
      command.handle('canvas.moveUp', moveSectionUp),
      command.handle('canvas.moveDown', moveSectionDown),
      command.handle('canvas.import', importReadme),
      command.handle('canvas.loadImportFile', loadReadmeFile),
    ];

    return () => {
      disposes.forEach(dispose => dispose());
    };
  }, [sections, currentSection]);

  useEffect(() => {
    const dispose = command.handle('canvas.add', handleAddSection);

    return () => {
      dispose();
    };
  }, [sections, currentSection, extensions]);

  useEffect(() => {
    const disposes = [
      command.handle('template.use', handleUseTemplate),
      command.handle('template.preview', handlePreviewTemplate),
    ];

    return () => {
      disposes.forEach(dispose => dispose());
    };
  }, [previewTemplate]);

  const previewMode = !!previewTemplate.length;
  const canvas = previewMode ? previewTemplate : sections;

  return (
    <CanvasContext.Provider
      value={{ sections: canvas, currentSection, previewMode }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export { CanvasContext, CanvasProvider };
