'use client';

import { object } from '#/utils/object';
import { parsers } from '#/utils/parsers';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { CanvasSection, PanelsEnum, Sections } from '#/types';

import { actions, command } from '#/lib/command';
import { canvasStore } from '#/stores/canvas-store';
import { extensionsStore } from '#/stores/extensions-store';
import { runInAction, toJS } from 'mobx';

type HandleEditPayload = {
  id?: string;
  path: string;
  value: unknown;
};

export function CanvasHandle() {
  function clear() {
    runInAction(() => {
      canvasStore.sections = [];
      canvasStore.activeSectionId = undefined;
      canvasStore.previewSections = [];
    });
  }

  function handleCanvasSectionAdd(sectionType: Sections) {
    const sectionData = extensionsStore.extensions.sections?.[sectionType] as
      | Record<string, unknown>
      | undefined;

    const newSection = {
      id: uuid(),
      type: sectionType,
      ...(sectionData?.defaultConfig || {}),
    } as CanvasSection;

    runInAction(() => {
      canvasStore.sections.push(newSection);
    });
  }

  function handleCanvasSectionEdit(payload: HandleEditPayload) {
    const { id = canvasStore.activeSectionId, path, value } = payload;
    if (!id) return;

    const section = canvasStore.$sectionsMap.byId[id];
    const finalPath = path.startsWith('props.') ? path : `props.${path}`;

    runInAction(() => {
      object.deep.set<CanvasSection>({
        obj: section,
        path: finalPath,
        value,
      });
    });
  }

  function handleCanvasSectionRemove(sectionId: string) {
    const index = canvasStore.$sectionsMap.indexById[sectionId];
    if (index === undefined) return;

    runInAction(() => {
      canvasStore.sections.splice(index, 1);

      if (sectionId === canvasStore.activeSectionId) {
        canvasStore.activeSectionId = undefined;
      }
    });

    if (sectionId === canvasStore.activeSectionId) {
      actions.panel.right.show(PanelsEnum.RECOMMENDED_RESOURCES);
    }
  }

  function handleCanvasSectionActivate(id: string) {
    const section = canvasStore.$sectionsMap.byId[id];
    if (!section) return;

    runInAction(() => {
      canvasStore.activeSectionId = id;
    });

    actions.panel.right.show(section.type);
  }

  function handleCanvasSectionsClear() {
    clear();
    actions.panel.right.show(PanelsEnum.RECOMMENDED_RESOURCES);
    actions.settings.preview.reset();
  }

  function handleCanvasSectionsReorder(order: string[]) {
    const sectionsReordered = order.map(
      sectionId => canvasStore.$sectionsMap.byId[sectionId]
    );

    runInAction(() => {
      canvasStore.sections = sectionsReordered;
    });
  }

  function handleCanvasSectionDuplicate(id: string) {
    const section = canvasStore.$sectionsMap.byId[id];
    if (!section) return;

    const clone = structuredClone(toJS(section)) as any;
    clone.id = uuid();

    const index = canvasStore.$sectionsMap.indexById[id];

    runInAction(() => {
      canvasStore.sections.splice(index + 1, 0, clone);
    });
  }

  function handleCanvasSectionMoveUp(id: string) {
    const index = canvasStore.$sectionsMap.indexById[id];
    if (index === 0) return;

    runInAction(() => {
      const temp = canvasStore.sections[index - 1];
      canvasStore.sections[index - 1] = canvasStore.sections[index];
      canvasStore.sections[index] = temp;
    });
  }

  function handleCanvasSectionMoveDown(id: string) {
    const index = canvasStore.$sectionsMap.indexById[id];
    if (index + 1 === canvasStore.sections.length) return;

    runInAction(() => {
      const temp = canvasStore.sections[index + 1];
      canvasStore.sections[index + 1] = canvasStore.sections[index];
      canvasStore.sections[index] = temp;
    });
  }

  function handleCanvasImportLoadFile() {
    document.getElementById('readme-file-import')?.click();
  }

  async function handleCanvasImportApply(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event?.target?.files?.[0];
    if (!file) return;

    const text = await file.text();
    const sections = await parsers.fromReadme(text);

    runInAction(() => {
      canvasStore.sections = sections;
      canvasStore.activeSectionId = undefined;
      canvasStore.previewSections = [];
    });
  }

  function handleCanvasPreviewApply() {
    runInAction(() => {
      canvasStore.sections = canvasStore.previewSections;
      canvasStore.previewSections = [];
    });

    actions.settings.preview.reset();
  }

  function handleCanvasPreviewSections(template?: CanvasSection[]) {
    const mappedTemplate = (template ?? []).map(section => ({
      ...section,
      id: uuid(),
    }));

    runInAction(() => {
      canvasStore.previewSections = mappedTemplate;
    });

    actions.settings.preview.apply();
  }

  useEffect(() => {
    const disposes = [
      command.handle('canvas.section.add', handleCanvasSectionAdd),
      command.handle('canvas.section.edit', handleCanvasSectionEdit),
      command.handle('canvas.section.remove', handleCanvasSectionRemove),
      command.handle('canvas.section.activate', handleCanvasSectionActivate),
      command.handle('canvas.sections.clear', handleCanvasSectionsClear),
      command.handle('canvas.sections.reorder', handleCanvasSectionsReorder),
      command.handle('canvas.section.duplicate', handleCanvasSectionDuplicate),
      command.handle('canvas.section.moveUp', handleCanvasSectionMoveUp),
      command.handle('canvas.section.moveDown', handleCanvasSectionMoveDown),

      command.handle('canvas.import.loadFile', handleCanvasImportLoadFile),
      command.handle('canvas.import.apply', handleCanvasImportApply),

      command.handle('canvas.preview.apply', handleCanvasPreviewApply),
      command.handle('canvas.preview.sections', handleCanvasPreviewSections),
    ];

    return () => {
      disposes.forEach(dispose => dispose());
    };
  }, []);

  return null;
}
