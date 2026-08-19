'use client';

import { Canvas } from '#/components/organisms/canvas';
import { Page } from '#/components/atoms/page';
import { Panel } from '#/components/organisms/panel';
import { PageFooter } from '#/components/molecules/page-footer';
import { GenerateReadmeButton } from '#/components/molecules/generate-readme-button';

import { PanelsEnum } from '#/types';

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

          <GenerateReadmeButton />
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
