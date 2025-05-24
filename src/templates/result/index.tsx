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

      <div className="flex flex-col w-full gap-xl overflow-auto">
        <ReadmeResult />
      </div>

      <Panel.Template.Full
        initialPanel={PanelsEnum.RECOMMENDED_RESOURCES}
        side="right"
      />
    </Page.Container>
  );
};

export { ResultTemplate };
