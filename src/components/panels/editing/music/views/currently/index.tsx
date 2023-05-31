import { GroupFields } from 'components';

import { first_group, second_group } from './fields';
import { list_items, projects_links } from './content';

import { getDeepObjectProperty } from 'utils';
import { useCanvas } from 'hooks';

import * as S from './styles';

type Projects = keyof typeof projects_links;

const Currently = () => {
  const { currentSection: obj } = useCanvas();

  const project = getDeepObjectProperty<Projects>(
    obj,
    'props.content.currently.project'
  )!;

  const links = projects_links[project];

  return (
    <S.Container>
      <S.Info>
        To show the current music from your Spotify, you will need to:{' '}
        <S.List>
          {list_items.map(item => (
            <S.ListItem
              key={item.id}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ))}
        </S.List>
      </S.Info>

      {first_group.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}

      <S.Info>
        Links related to the {project}&apos;s project:
        <S.Links>
          {links.map(link => (
            <S.Link key={link.label} href={link.link} target="_blank">
              {link.label}
            </S.Link>
          ))}
        </S.Links>
      </S.Info>

      {second_group.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </S.Container>
  );
};

export { Currently };
