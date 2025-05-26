import { Text } from 'components/ui/primitives/atoms/text';
import { Clickable } from 'components/ui/primitives/atoms/clickable';

export function CanvasErrorFallback() {
  function handleClear() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="h-full flex flex-col items-center text-center justify-center my-auto gap-xl">
      <Text.Heading>🐛 Oops! Encountered an Issue</Text.Heading>

      <div className="flex flex-col gap-md max-w-[65rem]">
        <Text.Paragraph>
          Made some data structure changes that may be conflicting with your
          current local storage. <br /> To continue, please clear your local
          storage
        </Text.Paragraph>

        <Text.Paragraph>
          If the issue persists, please create a new issue on the{' '}
          <Text.Link
            href="https://github.com/maurodesouza/profile-readme-generator/issues/new/choose"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Text.Link>{' '}
          so that I can assist you further. I appreciate your feedback and will
          do my best to resolve the issue as quickly as possible. ❤
        </Text.Paragraph>
      </div>

      <div className="flex items-center gap-md">
        <Clickable.ExternalLink
          variant="ghost"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/maurodesouza/profile-readme-generator/issues/new/choose"
        >
          Create an issue
        </Clickable.ExternalLink>

        <Clickable.Button
          tone="warning"
          variant="outline"
          onClick={handleClear}
        >
          Clear local storage
        </Clickable.Button>
      </div>
    </div>
  );
}
