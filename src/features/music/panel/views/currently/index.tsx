import { object } from '#/utils/object';
import { observer } from 'mobx-react-lite';

import { GroupFields } from '#/components/organisms/group-fields';

import { Text } from '#/components/atoms/text';
import { Callout } from '#/components/atoms/callout';

import { useCanvas } from '#/hooks';


import { first_group, second_group } from './fields';
import { list_items, projects_links } from './content';

type Projects = keyof typeof projects_links;

export const Currently = observer(function Currently() {
  const canvasStore = useCanvas();

  const project = object.deep.get<Projects>(
    canvasStore.$currentSection,
    'props.content.currently.project'
  )!;

  const links = projects_links[project];

  return (
    <div className="flex flex-col">
      <Callout tone="warning" className="mb-sm">
        To show the current music from your Spotify, you will need to:{' '}
        <ul className="flex flex-col">
          {list_items.map(item => (
            <li
              key={item.id}
              dangerouslySetInnerHTML={{ __html: item.content }}
              className="relative list-[circle]! ml-md"
            />
          ))}
        </ul>
      </Callout>

      {first_group.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}

      <Callout tone="warning" className="mb-sm">
        Links related to the {project}&apos;s project:
        <div className="flex flex-col">
          {links.map(link => (
            <Text.Link key={link.label} href={link.link} target="_blank">
              {link.label}
            </Text.Link>
          ))}
        </div>
      </Callout>

      {second_group.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </div>
  );
});
