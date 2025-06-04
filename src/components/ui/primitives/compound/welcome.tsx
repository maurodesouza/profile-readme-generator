import { events } from 'app';

import { Text } from 'components/ui/primitives/atoms/text';
import { ShareModal } from 'components/ui/common/modals/share';
import { DisplayBlock } from 'components/ui/primitives/atoms/display-block';

import { templates } from 'resources';
import { CanvasSection } from 'types';

const MAX_TEMPLATES_DISPLAY = 8;

export function Welcome() {
  return (
    <div className="flex flex-col items-center justify-between text-center pt-[calc(var(--spacing-xl)_*_3)]">
      <div className="flex flex-col gap-xs mb-md">
        <Text.Heading>Welcome To Profile Readme Generator</Text.Heading>
        <Text.Heading as="h3">
          <span className="hidden tablet:inline">🚀</span> The best profile
          readme generator you will find
          <span className="hidden tablet:inline">⚡</span>
        </Text.Heading>
      </div>

      <Text.Paragraph className="max-w-[46rem] mb-xl mt-md">
        You can create you readme manually by clicking on the options on the
        left or using one of the templates with some structure already made!
      </Text.Paragraph>

      <div className="hidden w-full max-w-[60rem] flex-col gap-md pb-xl tablet:flex">
        <div className="grid grid-cols-4 gap-md w-full items-start content-start">
          {templates
            .slice(0, MAX_TEMPLATES_DISPLAY)
            .map(({ template }, index) => (
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

        <Text.Small>*Click to preview one of the templates options</Text.Small>
      </div>

      <Text.Paragraph className="max-w-96 mt-auto">
        If you like it, give the{' '}
        <Text.Link
          href="https://github.com/maurodesouza/profile-readme-generator"
          target="_blank"
          rel="noreferrer"
        >
          project repository
        </Text.Link>{' '}
        a star on Github and{' '}
        <Text.Clickable onClick={() => events.modal.open(ShareModal)}>
          share
        </Text.Clickable>{' '}
        with your friends!! I will be happy with it! ❤
      </Text.Paragraph>
    </div>
  );
}
