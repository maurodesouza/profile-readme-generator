import { IconName } from 'lucide-react/dynamic';

import { Icon } from 'components/ui/primitives/atoms/icon';

import { config } from 'app';

import { SimpleInput } from 'components';
import { BaseModal } from '../base';

import { socials } from './socials';
import * as S from './styles';

const ShareModal = () => {
  const shareUrl = config.general.urls.app;

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
  };

  return (
    <BaseModal title="Share with your friends!">
      <S.Container>
        <p>
          This is amazing! I appreciate you for helping me by sharing my app,
          thank you very much ❤
        </p>

        <S.Socials>
          {socials.map(({ id, icon, share: Share }) => (
            <S.Social key={id}>
              <Share url={shareUrl}>
                <Icon name={icon as IconName} size={32} />
              </Share>
            </S.Social>
          ))}
        </S.Socials>

        <S.Footer>
          <SimpleInput defaultValue={shareUrl} disabled />

          <S.CopyButton onClick={handleCopyToClipboard}>
            <Icon name="copy" />
          </S.CopyButton>
        </S.Footer>
      </S.Container>
    </BaseModal>
  );
};

export { ShareModal };
