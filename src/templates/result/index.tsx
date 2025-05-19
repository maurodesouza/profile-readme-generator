import { ReadmeResult, Panel } from 'components';
import { PanelsEnum } from 'types';

const ResultTemplate = () => {
  return (
    <div className="flex gap-x-xl h-screen p-lg max-w-page mx-auto">
      <Panel initialPanel={PanelsEnum.GENERATED_FILES} side="left" />

      <div className="flex flex-col w-full gap-xl overflow-auto">
        <ReadmeResult />
      </div>

      <Panel initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} side="right" />
    </div>
  );
};

export { ResultTemplate };
