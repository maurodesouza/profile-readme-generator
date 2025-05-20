import { Footer, Markdown, Panel } from 'components';
import { Page } from 'components/ui/primitives/atoms/page';
import { PanelsEnum } from 'types';

type PostTemplateProps = {
  content: string;
};

const PostTemplate = (props: PostTemplateProps) => {
  const { content } = props;

  return (
    <Page.Container>
      <Panel side="left" initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} />

      <Page.Wrapper>
        <Page.Content>
          <Markdown>{content}</Markdown>
        </Page.Content>

        <Footer.Container>
          <Footer.Owner />
          <Footer.Navs />
          <Footer.GenericLink href="/" label="Try Generator" />
        </Footer.Container>
      </Page.Wrapper>

      <Panel side="right" initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} />
    </Page.Container>
  );
};

export { PostTemplate };
