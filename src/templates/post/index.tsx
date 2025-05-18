import { Footer, Markdown, Panel } from 'components';

import * as S from './styles';
import { PanelsEnum } from 'types';

type PostTemplateProps = {
  content: string;
};

const PostTemplate = (props: PostTemplateProps) => {
  const { content } = props;

  return (
    <S.Container>
      <Panel side="left" initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} />

      <S.Wrapper>
        <S.Content>
          <Markdown>{content}</Markdown>
        </S.Content>

        <Footer.Container>
          <Footer.Owner />
          <Footer.Navs />
          <Footer.GenericLink href="/" label="Try Generator" />
        </Footer.Container>
      </S.Wrapper>

      <Panel side="right" initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} />
    </S.Container>
  );
};

export { PostTemplate };
