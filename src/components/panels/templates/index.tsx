import { events } from 'app';
import { templates } from 'resources';

import { CanvasSection } from 'types';
import * as S from './styles';

const PanelTemplates = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Templates</S.Title>

        <S.Text>
          Select a template to preview, and then confirm to be able to edit.
        </S.Text>
      </S.Header>

      <S.Content>
        {templates.map(({ template }, index) => (
          <S.Wrapper
            key={index}
            onClick={() => events.template.preview(template as CanvasSection[])}
          >
            <S.Block>{index + 1}</S.Block>
          </S.Wrapper>
        ))}
      </S.Content>

      <S.Small>
        OBS: on confirm, the template will replace all canvas content.
      </S.Small>
    </S.Container>
  );
};

export { PanelTemplates };
