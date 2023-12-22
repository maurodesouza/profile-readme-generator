import { GroupFields } from 'components';

import { groups } from './fields';
import { info_links } from './content';

import * as S from './styles';

const Recently = () => {
  return (
    <S.Container>
      <S.Info>
        Before start, you need to connect your Spotify account with the Vercel
        app.
        <S.Links>
          {info_links.map(link => (
            <S.Link key={link.label} href={link.link} target="_blank">
              {link.label}
            </S.Link>
          ))}
        </S.Links>
      </S.Info>

      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </S.Container>
  );
};

export { Recently };
