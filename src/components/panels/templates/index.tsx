import { Text } from 'components/ui/primitives/atoms/text';
import { Panel } from 'components/ui/primitives/atoms/panel';
import { DisplayBlock } from 'components/ui/primitives/atoms/display-block';

import { events } from '@events';
import { templates } from 'resources';
import { CanvasSection } from 'types';

const PanelTemplates = () => {
  return (
    <div className="h-full flex flex-col gap-md">
      <Text.Heading as="h2">Templates</Text.Heading>

      <Text.Paragraph>
        Select a template to preview, and then confirm to be able to edit.
      </Text.Paragraph>

      <Panel.Scrollable>
        <div className="grid grid-cols-2 gap-md">
          {templates.map(({ template }, index) => (
            <button
              key={index}
              onClick={() =>
                events.template.preview(template as CanvasSection[])
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

      <Text.Small>
        OBS: on confirm, the template will replace all canvas content.
      </Text.Small>
    </div>
  );
};

export { PanelTemplates };
