import { Page } from '#/components/atoms/page';
import { Panel } from '#/components/organisms/panel';
import { PageFooter } from '#/components/molecules/page-footer';
import { Markdown } from '#/components/atoms/markdown';
import { Clickable } from '#/components/atoms/clickable';

import { PanelsEnum } from 'types';

type PostTemplateProps = {
  content: string;
};

const PostTemplate = (props: PostTemplateProps) => {
  const { content } = props;

  return (
    <Page.Container>
      <Panel.Template.Full
        side="left"
        initialPanel={PanelsEnum.RECOMMENDED_RESOURCES}
      />

      <Page.Wrapper>
        <Page.Content>
          <Markdown>{content}</Markdown>
        </Page.Content>

        <PageFooter.Container>
          <PageFooter.Owner />
          <PageFooter.Navs />

          <Clickable.Link tone="brand" href="/">
            Try Generator
          </Clickable.Link>
        </PageFooter.Container>
      </Page.Wrapper>

      <Panel.Template.Full
        side="right"
        initialPanel={PanelsEnum.RECOMMENDED_RESOURCES}
      />
    </Page.Container>
  );
};

export { PostTemplate };
