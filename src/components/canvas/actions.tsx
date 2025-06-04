import { Icon } from 'components/ui/primitives/atoms/icon';
import { Tooltip } from 'components/ui/primitives/atoms/tooltip';
import { Clickable } from 'components/ui/primitives/atoms/clickable';

import { events } from 'app';
import { useCanvas } from 'hooks';
import { PanelsEnum } from 'types';

export function CanvasActions() {
  const { sections, previewMode } = useCanvas();
  const hasSection = !!sections.length;

  const state = (() => {
    if (previewMode) return { is: 'preview-mode' } as const;
    if (!previewMode && hasSection) return { is: 'canvas' } as const;

    return { is: 'hidden' } as const;
  })();

  return (
    <>
      <div className="absolute top-md -left-md w-8 flex flex-col gap-md">
        {state.is !== 'hidden' && (
          <div className="py-md bg-background-default box-border !rounded-full">
            {state.is === 'preview-mode' && (
              <>
                <Tooltip position="left" content="Use template" tone="success">
                  <Clickable.Button
                    aria-label="Use template"
                    size="icon"
                    variant="icon"
                    tone="success"
                    onClick={events.template.use}
                  >
                    <Icon name="check" />
                  </Clickable.Button>
                </Tooltip>

                <Tooltip position="left" content="Leave preview" tone="danger">
                  <Clickable.Button
                    aria-label="Leave preview"
                    size="icon"
                    variant="icon"
                    tone="danger"
                    onClick={() => events.template.preview()}
                  >
                    <Icon name="x" />
                  </Clickable.Button>
                </Tooltip>
              </>
            )}

            {state.is === 'canvas' && (
              <>
                <Tooltip position="left" content="Clear canvas" tone="danger">
                  <Clickable.Button
                    aria-label="Clear canvas"
                    size="icon"
                    variant="icon"
                    tone="danger"
                    onClick={events.canvas.clear}
                  >
                    <Icon name="trash" />
                  </Clickable.Button>
                </Tooltip>
              </>
            )}
          </div>
        )}

        <div className="py-md bg-background-default box-border !rounded-full">
          <Tooltip position="left" content="Open settings panel" tone="brand">
            <Clickable.Button
              aria-label="Open settings panel"
              size="icon"
              variant="icon"
              tone="brand"
              onClick={() =>
                events.panel.show('right', PanelsEnum.USER_SETTINGS)
              }
            >
              <Icon name="settings" />
            </Clickable.Button>
          </Tooltip>

          <Tooltip position="left" content="Toggle Theme" tone="brand">
            <Clickable.Button
              aria-label="Toggle Theme"
              size="icon"
              variant="icon"
              tone="brand"
              onClick={events.theme.toggle}
            >
              <Icon name="sun-moon" />
            </Clickable.Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
