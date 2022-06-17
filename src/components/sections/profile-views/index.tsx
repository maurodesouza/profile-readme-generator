import { GuardSection } from '../guard';

import { useSettings } from 'hooks';
import { getProfileViewsUrl, objectToQueryParams } from 'utils';

import * as S from './styles';

type Content = {
  type: Parameters<typeof getProfileViewsUrl>[0];
  props: Record<string, unknown>;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type ProfileViewsProps = {
  id: string;
  content: Content;
  styles: Styles;
};

const ProfileViewsSection = ({ id, content, styles }: ProfileViewsProps) => {
  const { settings } = useSettings();

  const { type, props } = content;
  const { github = '' } = settings.user;

  const url = getProfileViewsUrl(type, github as string);
  const fullUrl = `${url}${objectToQueryParams(props)}`;

  return (
    <GuardSection sectionId={id}>
      <S.Container {...styles}>
        <img src={fullUrl} alt="Profile views count" />
      </S.Container>
    </GuardSection>
  );
};

export { ProfileViewsSection };
