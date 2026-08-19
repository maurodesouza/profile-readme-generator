import { useTranslations } from 'next-intl';

import { GroupFields } from '#/components/organisms/group-fields';

import { Text } from '#/components/atoms/text';
import { Callout } from '#/components/atoms/callout';
import { useTranslateField } from '#/hooks';

import { groups } from './fields';
import { info_links } from './content';

export function Recently() {
  const tUi = useTranslations('ui');
  const translate = useTranslateField();

  return (
    <div className="flex flex-col gap-sm">
      <Callout tone="warning">
        {tUi('music.recently.callout')}
        <div className="flex flex-col">
          {info_links.map(link => (
            <Text.Link key={link.label} href={link.link} target="_blank">
              {translate(link.label)}
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
