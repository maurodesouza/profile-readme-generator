import { ReadmeResult } from 'components';
import { Page } from 'components/ui/primitives/atoms/page';
import { Panel } from 'components/ui/primitives/atoms/panel';

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
      </Page.Wrapper>

      <Panel.Template.Full
        initialPanel={PanelsEnum.RECOMMENDED_RESOURCES}
        side="right"
      />
    </Page.Container>
  );
};

export { ResultTemplate };
