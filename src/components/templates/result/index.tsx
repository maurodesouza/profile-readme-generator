'use client';

import { useTranslations } from 'next-intl';

import { parsers } from '#/utils/parsers';
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

import { actions, command } from '#/lib/command';
import { PanelsEnum } from '#/types';

import { useCanvas, useExtensions, useSettings } from '#/hooks';

export const ResultTemplate = observer(function ResultTemplate() {
  const t = useTranslations('ui');
  const [content, setContent] = useState('');

  const canvasStore = useCanvas();
  const extensionsStore = useExtensions();
  const settingsStore = useSettings();

  const hasWorkflows =
    parsers.toReadme(
      canvasStore.sections,
      extensionsStore.extensions.sections,
      settingsStore.$settings
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

          <Text.Heading as="h2">{t('result.heading')}</Text.Heading>
          <div className="flex justify-end gap-xs ml-auto">
            <Clickable.ExternalLink
              tone="warning"
              variant="ghost"
              href="https://github.com/maurodesouza/profile-readme-generator"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="star" />
              {t('result.starRepo')}
            </Clickable.ExternalLink>

            <Clickable.ExternalLink
              tone="warning"
              variant="ghost"
              href="https://github.com/maurodesouza/profile-readme-generator/fork"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="git-fork" />
              {t('result.forkRepo')}
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
            {t('result.workflowBefore')}{' '}
            <Text.Highlight className="tone palette-warning self-center">
              {t('result.workflowPath')}
            </Text.Highlight>
            {' .'}
            <br />
            {t('result.workflowAfter')}
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
                  {isCopied ? t('result.copiedButton') : t('result.copyButton')}
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
