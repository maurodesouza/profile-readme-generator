import { useEffect } from 'react';

import { Canvas, Footer, Panel } from 'components';
import { Page } from 'components/ui/primitives/atoms/page';

import { api } from 'services';
import { PanelsEnum } from 'types';

const CanvasTemplate = () => {
  useEffect(() => {
    api.put('visits');
  }, []);

  return (
    <Page.Container>
      <Panel initialPanel={PanelsEnum.NEW_SECTION} side="left" />

      <Page.Wrapper>
        <Canvas />

        <Footer.Container>
          <Footer.Owner />
          <Footer.Navs />
          <Footer.GenericLink href="/result" label="Generate README" />
        </Footer.Container>
      </Page.Wrapper>

      <Panel initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} side="right" />
    </Page.Container>
  );
};

export { CanvasTemplate };
