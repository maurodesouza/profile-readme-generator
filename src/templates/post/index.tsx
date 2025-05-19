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

      <div className="flex flex-col items-center gap-xl w-full h-full flex-1">
        <div className="flex flex-col h-full w-full p-lg pr-sm overflow-auto scrollbar box-border [&_p]:my-lg">
          <Markdown>{content}</Markdown>
        </div>

        <Footer.Container>
          <Footer.Owner />
          <Footer.Navs />
          <Footer.GenericLink href="/" label="Try Generator" />
        </Footer.Container>
      </div>

      <Panel side="right" initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} />
    </Page.Container>
  );
};

export { PostTemplate };
