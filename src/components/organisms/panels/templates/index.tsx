import { useTranslations } from 'next-intl';

import { Text } from '#/components/atoms/text';
import { Panel } from '#/components/organisms/panel';
import { DisplayBlock } from '#/components/atoms/display-block';

import { actions } from '#/lib/command';
import { templates } from '#/resources';
import { CanvasSection } from '#/types';

const PanelTemplates = () => {
  const t = useTranslations('ui.templates');

  return (
    <div className="h-full flex flex-col gap-md">
      <Text.Heading as="h2">{t('heading')}</Text.Heading>

      <Text.Paragraph>{t('description')}</Text.Paragraph>

      <Panel.Scrollable>
        <div className="grid grid-cols-2 gap-md">
          {templates.map(({ template }, index) => (
            <button
              key={index}
              data-testid="template-card"
              aria-label={t('aria-label', { index: index + 1 })}
              onClick={() =>
                actions.canvas.preview.sections(template as CanvasSection[])
              }
            >
              <DisplayBlock.Container>
                <DisplayBlock.Content>
                  <DisplayBlock.Label className="text-xl">
                    {index + 1}
                  </DisplayBlock.Label>
                </DisplayBlock.Content>
              </DisplayBlock.Container>
            </button>
          ))}
        </div>
      </Panel.Scrollable>

      <Text.Small>{t('obs')}</Text.Small>
    </div>
  );
};

export { PanelTemplates };
