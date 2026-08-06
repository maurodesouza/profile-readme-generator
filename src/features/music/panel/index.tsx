import { observer } from 'mobx-react-lite';

import { GroupFields } from '#/components/organisms/group-fields';
import { getDeepObjectProperty } from '#/utils';

import { useCanvas } from '#/hooks';
import { views } from './views';

import { groups } from './fields';
import { Panel } from '#/components/organisms/panel';

type Views = keyof typeof views;

export const MusicEditPanel = observer(function MusicEditPanel() {
  const canvasStore = useCanvas();

  const currentView = getDeepObjectProperty<Views>(
    canvasStore.$currentSection,
    'props.content.type'
  )!;

  const View = views[currentView];

  return (
    <Panel.Scrollable>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}

      <View />
    </Panel.Scrollable>
  );
});
