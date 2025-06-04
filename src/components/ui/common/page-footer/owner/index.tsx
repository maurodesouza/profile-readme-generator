import { Text } from 'components/ui/primitives/atoms/text';

export function FooterOwner() {
  return (
    <div className="hidden h-full shrink-0 gap-sm desktop:flex">
      <img
        className="size-8 self-center"
        src="/assets/icon-32.png"
        alt="A white circle with a dark file icon outlined in the center"
      />

      <div className="flex flex-col h-full justify-center">
        <Text.Strong>Profile Readme Generator</Text.Strong>
        <Text.Small className="not-italic">
          Developed and maintained by{' '}
          <Text.Link
            href="https://github.com/maurodesouza"
            target="_blank"
            rel="noreferrer"
            className="text-xs"
          >
            Mauro de Souza
          </Text.Link>
        </Text.Small>
      </div>
    </div>
  );
}
