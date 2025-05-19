import { ReadmeResult, Panel } from 'components';
import { Page } from 'components/ui/primitives/atoms/page';

import { PanelsEnum } from 'types';

const ResultTemplate = () => {
  return (
    <Page.Container>
      <Panel initialPanel={PanelsEnum.GENERATED_FILES} side="left" />

      <div className="flex flex-col w-full gap-xl overflow-auto">
        <ReadmeResult />
      </div>

      <Panel initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} side="right" />
    </Page.Container>
  );
};

export { ResultTemplate };
