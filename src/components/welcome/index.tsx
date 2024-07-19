import { events } from 'app';
import { CanvasSection } from 'types';

import { templates } from 'resources';
import * as S from './styles';

const MAX_TEMPLATES_DISPLAY = 8;

const Welcome = () => {
  return (
    <S.Container>
      <S.Header>
        <h1>GitHub profile readme maker</h1>
        <h2>
          <span>⚡</span>
        </h2>
      </S.Header>

      <S.Description>
        You can create you readme manually by clicking on the options on the
        left or using one of the templates with some structure already made!
      </S.Description>

      <S.Middle>
        <S.Templates>
          {templates
            .slice(0, MAX_TEMPLATES_DISPLAY)
            .map(({ template }, index) => (
              <S.Wrapper
                key={index}
                onClick={() =>
                  events.template.preview(template as CanvasSection[])
                }
              >
                <S.Block>{index + 1}</S.Block>
              </S.Wrapper>
            ))}
        </S.Templates>

        <small>
          <i>*Click to preview one of the templates options</i>
        </small>
      </S.Middle>

      <S.Footer>
        <p>
          <a
            href="https://github.com/metaory/profile-readme-maker"
            target="_blank"
            rel="noreferrer"
          >
            github.com/metaory/profile-readme-maker
          </a>{' '}
        </p>
      </S.Footer>
    </S.Container>
  );
};

export { Welcome };
