import * as S from './styles';

const CanvasErrorFallback = () => {
  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <S.Container>
      <h2>🐛 Oops! Encountered an Issue</h2>

      <S.Content>
        <p>
          Made some data structure changes that may be conflicting with your
          current local storage. <br /> To continue, please clear your local
          storage
        </p>

        <p>
          If the issue persists, please create a new issue on the{' '}
          <a
            href="https://github.com/maurodesouza/profile-readme-generator/issues/new/choose"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{' '}
          so that I can assist you further. I appreciate your feedback and will
          do my best to resolve the issue as quickly as possible. ❤
        </p>
      </S.Content>

      <S.Wrapper>
        <a
          href="https://github.com/maurodesouza/profile-readme-generator/issues/new/choose"
          target="_blank"
          rel="noreferrer"
        >
          Create an issue
        </a>

        <S.Button onClick={handleClear}>Clear local storage</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export { CanvasErrorFallback };
