import { Canvas } from '#/components/organisms/canvas';
import { Page } from '#/components/atoms/page';
import { Panel } from '#/components/organisms/panel';
import { PageFooter } from '#/components/molecules/page-footer';
import { Clickable } from '#/components/atoms/clickable';

import { PanelsEnum } from 'types';

const CanvasTemplate = () => {
  return (
    <Page.Container>
      <Panel.Template.Full initialPanel={PanelsEnum.NEW_SECTION} side="left" />

      <Page.Wrapper>
        <Page.Content>
          <Canvas />
        </Page.Content>

        <PageFooter.Container>
          <PageFooter.Owner />
          <PageFooter.Navs />

          <Clickable.Link tone="success" href="/result">
            Generate README
          </Clickable.Link>
        </PageFooter.Container>
      </Page.Wrapper>

      <Panel.Template.Full
        initialPanel={PanelsEnum.RECOMMENDED_RESOURCES}
        side="right"
      />
    </Page.Container>
  );
};

export { CanvasTemplate };
