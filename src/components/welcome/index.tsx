import { events } from 'app';
import { CanvasSection, Modals } from 'types';

import { templates } from 'resources';
import * as S from './styles';

const MAX_TEMPLATES_DISPLAY = 8;

const Welcome = () => {
  return (
    <S.Container>
      <S.Header>
        <h1>Welcome To Profile Readme Generator</h1>
        <h2>
          <span>🚀</span> The best profile readme generator you will find
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
          If you like it, give the{' '}
          <a
            href="https://github.com/maurodesouza/profile-readme-generator"
            target="_blank"
            rel="noreferrer"
          >
            project repository
          </a>{' '}
          a star on Github and{' '}
          <button onClick={() => events.modal.open(Modals.SHARE)}>share</button>{' '}
          with your friends!! I will be happy with it! ❤
        </p>
      </S.Footer>
    </S.Container>
  );
};

export { Welcome };
