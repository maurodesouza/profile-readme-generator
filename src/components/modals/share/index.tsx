import { IconName } from 'lucide-react/dynamic';

import { SimpleInput } from 'components';
import { Icon } from 'components/ui/primitives/atoms/icon';
import { Text } from 'components/ui/primitives/atoms/text';
import { Dialog } from 'components/ui/primitives/atoms/dialog';

import { config } from 'app';
import { socials } from './socials';

export function ShareModal() {
  const shareUrl = config.general.urls.app;

  async function handleCopyToClipboard() {
    await navigator.clipboard.writeText(shareUrl);
  }

  return (
    <Dialog.Content className="max-w-[48rem]">
      <Dialog.Header>
        <Dialog.Title>Share with your friends!</Dialog.Title>

        <Dialog.Close />
      </Dialog.Header>

      <Text.Paragraph>
        This is amazing! I appreciate you for helping me by sharing my app,
        thank you very much ❤
      </Text.Paragraph>

      <div className="flex justify-center gap-lg my-xl">
        {socials.map(({ id, icon, share: Share }) => (
          <button
            key={id}
            className="box-border hover:!text-tone-luminosity-300 hover:!border-tone-luminosity-300 !rounded-full size-16"
          >
            <Share url={shareUrl}>
              <Icon name={icon as IconName} size={32} />
            </Share>
          </button>
        ))}
      </div>

      <Dialog.Footer className="relative">
        <SimpleInput defaultValue={shareUrl} disabled />

        <button
          className="absolute top-1/2 right-md"
          onClick={handleCopyToClipboard}
        >
          <Icon name="copy" />
        </button>
      </Dialog.Footer>
    </Dialog.Content>
  );
}
