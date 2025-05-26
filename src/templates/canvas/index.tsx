import { useEffect } from 'react';

import { Canvas, Footer } from 'components';
import { Page } from 'components/ui/primitives/atoms/page';
import { Panel } from 'components/ui/primitives/atoms/panel';
import { Clickable } from 'components/ui/primitives/atoms/clickable';

import { api } from 'services';
import { PanelsEnum } from 'types';

const CanvasTemplate = () => {
  useEffect(() => {
    api.put('visits');
  }, []);

  return (
    <Page.Container>
      <Panel.Template.Full initialPanel={PanelsEnum.NEW_SECTION} side="left" />

      <Page.Wrapper>
        <Canvas />

        <Footer.Container>
          <Footer.Owner />
          <Footer.Navs />

          <Clickable.Link tone="success" href="/result">
            Generate README
          </Clickable.Link>
        </Footer.Container>
      </Page.Wrapper>

      <Panel.Template.Full
        initialPanel={PanelsEnum.RECOMMENDED_RESOURCES}
        side="right"
      />
    </Page.Container>
  );
};

export { CanvasTemplate };
