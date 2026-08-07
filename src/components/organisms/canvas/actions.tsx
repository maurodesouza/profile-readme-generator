'use client';

import { useTranslations } from 'next-intl';

import { observer } from 'mobx-react-lite';

import { Icon } from '#/components/atoms/icon';
import { Tooltip } from '#/components/atoms/tooltip';
import { Clickable } from '#/components/atoms/clickable';

import { useCanvas } from '#/hooks';
import { PanelsEnum } from '#/types';
import { actions } from '#/lib/command';

export const CanvasActions = observer(function CanvasActions() {
  const t = useTranslations('ui');
  const canvasStore = useCanvas();
  const hasSection = !!canvasStore.sections.length;

  const state = (() => {
    if (canvasStore.$isInPreviewMode) return { is: 'preview-mode' } as const;
    if (!canvasStore.$isInPreviewMode && hasSection)
      return { is: 'canvas' } as const;

    return { is: 'hidden' } as const;
  })();

  return (
    <>
      <div className="absolute top-md -left-md w-8 flex flex-col gap-md">
        {state.is !== 'hidden' && (
          <div className="py-md bg-background-default box-border rounded-full!">
            {state.is === 'preview-mode' && (
              <>
                <Tooltip
                  position="left"
                  content={t('canvasActions.useTemplate')}
                  tone="success"
                >
                  <Clickable.Button
                    aria-label={t('canvasActions.useTemplate')}
                    size="icon"
                    variant="icon"
                    tone="success"
                    onClick={actions.canvas.preview.apply}
                  >
                    <Icon name="check" />
                  </Clickable.Button>
                </Tooltip>

                <Tooltip
                  position="left"
                  content={t('canvasActions.leavePreview')}
                  tone="danger"
                >
                  <Clickable.Button
                    aria-label={t('canvasActions.leavePreview')}
                    size="icon"
                    variant="icon"
                    tone="danger"
                    onClick={() => actions.canvas.preview.sections()}
                  >
                    <Icon name="x" />
                  </Clickable.Button>
                </Tooltip>
              </>
            )}

            {state.is === 'canvas' && (
              <>
                <Tooltip
                  position="left"
                  content={t('canvasActions.reorderSections')}
                  tone="brand"
                >
                  <Clickable.Button
                    aria-label={t('canvasActions.reorderSections')}
                    size="icon"
                    variant="icon"
                    tone="brand"
                    onClick={() =>
                      actions.panel.right.show(PanelsEnum.REORDER_SECTIONS)
                    }
                  >
                    <Icon name="arrow-up-down" />
                  </Clickable.Button>
                </Tooltip>
                <Tooltip
                  position="left"
                  content={t('canvasActions.clearCanvas')}
                  tone="danger"
                >
                  <Clickable.Button
                    aria-label={t('canvasActions.clearCanvas')}
                    size="icon"
                    variant="icon"
                    tone="danger"
                    onClick={actions.canvas.sections.clear}
                  >
                    <Icon name="trash" />
                  </Clickable.Button>
                </Tooltip>
              </>
            )}
          </div>
        )}

        <div className="py-md bg-background-default box-border rounded-full!">
          <Tooltip
            position="left"
            content={t('canvasActions.openSettings')}
            tone="brand"
          >
            <Clickable.Button
              aria-label={t('canvasActions.openSettings')}
              size="icon"
              variant="icon"
              tone="brand"
              onClick={() => actions.panel.right.show(PanelsEnum.USER_SETTINGS)}
            >
              <Icon name="settings" />
            </Clickable.Button>
          </Tooltip>

          <Tooltip
            position="left"
            content={t('canvasActions.toggleTheme')}
            tone="brand"
          >
            <Clickable.Button
              aria-label={t('canvasActions.toggleTheme')}
              size="icon"
              variant="icon"
              tone="brand"
              onClick={actions.theme.toggle}
            >
              <Icon name="sun-moon" />
            </Clickable.Button>
          </Tooltip>

          <Tooltip
            position="left"
            content={t('canvasActions.importReadme')}
            tone="brand"
          >
            <Clickable.Button
              aria-label={t('canvasActions.importReadme')}
              size="icon"
              variant="icon"
              tone="brand"
              onClick={actions.canvas.import.loadFile}
            >
              <Icon name="upload-cloud" />
            </Clickable.Button>
          </Tooltip>

          <input
            id="readme-file-import"
            type="file"
            accept=".md,text/markdown"
            style={{
              display: 'none',
            }}
            onChange={actions.canvas.import.apply}
          />
        </div>
      </div>
    </>
  );
});
