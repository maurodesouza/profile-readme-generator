import { GroupFields } from '#/components/organisms/group-fields';
import { groups } from './fields';

const PanelUserSettings = () => {
  return (
    <div>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} context="settings" />
      ))}
    </div>
  );
};

export { PanelUserSettings };
