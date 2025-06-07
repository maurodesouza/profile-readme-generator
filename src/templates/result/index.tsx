import { ReadmeResult } from 'components';
import { Icon } from 'components/ui/primitives/atoms/icon';
import { Page } from 'components/ui/primitives/atoms/page';
import { Panel } from 'components/ui/primitives/atoms/panel';
import { PageFooter } from 'components/ui/common/page-footer';
import { Clickable } from 'components/ui/primitives/atoms/clickable';
import { CopyCurrentFileContent } from 'components/ui/primitives/compound/copy-current-file-content';

import { PanelsEnum } from 'types';

const ResultTemplate = () => {
  return (
    <Page.Container>
      <Panel.Template.Full
        initialPanel={PanelsEnum.GENERATED_FILES}
        side="left"
      />

      <Page.Wrapper>
        <Page.Content>
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
};

export { ResultTemplate };
