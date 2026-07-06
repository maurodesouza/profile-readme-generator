import { ReadmeResult } from '#/components/organisms/readme-result';

import { Icon } from '#/components/atoms/icon';
import { Page } from '#/components/atoms/page';
import { Text } from '#/components/atoms/text';
import { Panel } from '#/components/organisms/panel';
import { PageFooter } from '#/components/molecules/page-footer';
import { Clickable } from '#/components/atoms/clickable';
import { CopyCurrentFileContent } from '#/components/molecules/copy-current-file-content';

import { PanelsEnum } from 'types';

export function ResultTemplate() {
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
          <ReadmeResult />
        </Page.Content>

        <PageFooter.Container>
          <PageFooter.Owner />
          <PageFooter.Navs />

          <CopyCurrentFileContent>
            {({ copy, isCopied }) => {
              return (
                <Clickable.Button
                  onClick={copy}
                  tone="success"
                  className="w-[166px]"
                >
                  <Icon name={isCopied ? 'check' : 'copy'} />
                  {isCopied ? 'Copied 🎉' : 'Copy File Content'}
                </Clickable.Button>
              );
            }}
          </CopyCurrentFileContent>
        </PageFooter.Container>
      </Page.Wrapper>

      <Panel.Template.Full
        initialPanel={PanelsEnum.RECOMMENDED_RESOURCES}
        side="right"
      />
    </Page.Container>
  );
}
