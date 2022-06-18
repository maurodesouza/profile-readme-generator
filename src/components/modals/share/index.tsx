import { Copy as CopyIcon } from '@styled-icons/feather';
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
          {socials.map(({ id, icon: Icon, share: Share }) => (
            <S.Social key={id}>
              <Share url={shareUrl}>
                <Icon size={32} />
              </Share>
            </S.Social>
          ))}
        </S.Socials>

        <S.Footer>
          <SimpleInput defaultValue={shareUrl} disabled />

          <S.CopyButton onClick={handleCopyToClipboard}>
            <CopyIcon size={16} />
          </S.CopyButton>
        </S.Footer>
      </S.Container>
    </BaseModal>
  );
};

export { ShareModal };
