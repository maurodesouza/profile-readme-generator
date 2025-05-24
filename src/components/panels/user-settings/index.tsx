import { GroupFields } from 'components';
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
