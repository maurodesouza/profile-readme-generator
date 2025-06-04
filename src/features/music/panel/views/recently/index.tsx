import { GroupFields } from 'components';

import { Text } from 'components/ui/primitives/atoms/text';
import { Callout } from 'components/ui/primitives/atoms/callout';

import { groups } from './fields';
import { info_links } from './content';

export function Recently() {
  return (
    <div className="flex flex-col gap-sm">
      <Callout tone="warning">
        Before start, you need to connect your Spotify account with the Vercel
        app.
        <div className="flex flex-col">
          {info_links.map(link => (
            <Text.Link key={link.label} href={link.link} target="_blank">
              {link.label}
            </Text.Link>
          ))}
        </div>
      </Callout>

      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </div>
  );
}
