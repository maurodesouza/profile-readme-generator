import { observer } from 'mobx-react-lite';

import { useEffect, useState } from 'react';

import { Icon } from '#/components/atoms/icon';
import { Page } from '#/components/atoms/page';
import { Text } from '#/components/atoms/text';
import { Clickable } from '#/components/atoms/clickable';

import { Panel } from '#/components/organisms/panel';
import { ReadmeResult } from '#/components/organisms/readme-result';

import { PageFooter } from '#/components/molecules/page-footer';
import { CopyToClipboard } from '#/components/molecules/copy-to-clipboard';

import { actions, command } from 'lib/command';
import { PanelsEnum } from 'types';

import { useCanvas, useExtensions, useSettings } from 'hooks';
import { parseToReadme } from 'utils';

export const ResultTemplate = observer(function ResultTemplate() {
  const [content, setContent] = useState('');

  const canvasStore = useCanvas();
  const extensionsStore = useExtensions();
  const settingsStore = useSettings();

  const hasWorkflows =
    parseToReadme(
      canvasStore.sections,
      extensionsStore.extensions.sections,
      settingsStore.settings
    )[0].files.length > 0;

  function handleShowContent(content: string) {
    setContent(content);
  }

  useEffect(() => {
    const dispose = command.handle('result.show', handleShowContent);

    return () => {
      dispose();
    };
  }, []);

  return (
    <Page.Container>
      <Panel.Template.Full
        initialPanel={PanelsEnum.GENERATED_FILES}
        side="left"
      />

      <Page.Wrapper>
        <header className="flex items-center gap-md box-border py-md px-xl">
          <Clickable.Link href="/" size="icon" variant="ghost">
            <Icon name="chevron-left" />
          </Clickable.Link>

          <Text.Heading as="h2">Your Readme is Done 🎉🎉🎉</Text.Heading>
          <div className="flex justify-end gap-xs ml-auto">
            <Clickable.ExternalLink
              tone="warning"
              variant="ghost"
              href="https://github.com/maurodesouza/profile-readme-generator"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="star" />
              Star This Project
            </Clickable.ExternalLink>

            <Clickable.ExternalLink
              tone="warning"
              variant="ghost"
              href="https://github.com/maurodesouza/profile-readme-generator/fork"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="git-fork" />
              Fork on Github
            </Clickable.ExternalLink>
          </div>
        </header>

        <Page.Content className="relative">
          <ReadmeResult content={content} />
        </Page.Content>

        {hasWorkflows && (
          <Text.Paragraph
            className="text-center"
            onMouseEnter={() => actions.generated.workflows.highlight()}
            onMouseLeave={() => actions.generated.workflows.unhighlight()}
          >
            Hey, hey, hey! You also generated workflow files in{' '}
            <Text.Highlight className="tone palette-warning self-center">
              .github/workflows
            </Text.Highlight>
            &nbsp;.
            <br />
            Don&apos;t forget to copy those too — your README won&apos;t work
            without them!
          </Text.Paragraph>
        )}

        <PageFooter.Container>
          <PageFooter.Owner />
          <PageFooter.Navs />

          <CopyToClipboard content={content}>
            {({ copy, isCopied }) => {
              return (
                <Clickable.Button
                  onClick={copy}
                  tone="success"
                  className="w-41.5"
                >
                  <Icon name={isCopied ? 'check' : 'copy'} />
                  {isCopied ? 'Copied 🎉' : 'Copy File Content'}
                </Clickable.Button>
              );
            }}
          </CopyToClipboard>
        </PageFooter.Container>
      </Page.Wrapper>

      <Panel.Template.Full
        initialPanel={PanelsEnum.RECOMMENDED_RESOURCES}
        side="right"
      />
    </Page.Container>
  );
});
