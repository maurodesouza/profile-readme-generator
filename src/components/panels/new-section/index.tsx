import { IconName } from 'lucide-react/dynamic';

import { Panel } from 'components/ui/primitives/atoms/panel';
import { DisplayBlock } from 'components/ui/primitives/atoms/display-block';

import { useExtensions } from 'hooks';
import { PanelsEnum } from 'types';

import { contents } from './contents';

const PanelNewSection = () => {
  const { extensions } = useExtensions();

  const items = Object.values(
    extensions[PanelsEnum.NEW_SECTION] ?? {}
  ) as typeof contents;

  return (
    <Panel.Scrollable>
      <div className="grid grid-cols-2 gap-md">
        {[...contents, ...items].map(({ icon, name, ...rest }) => (
          <button key={name} {...rest}>
            <DisplayBlock.Container>
              <DisplayBlock.Content>
                <DisplayBlock.Icon name={icon as IconName} size={48} />
                <DisplayBlock.Label>{name}</DisplayBlock.Label>
              </DisplayBlock.Content>
            </DisplayBlock.Container>
          </button>
        ))}
      </div>
    </Panel.Scrollable>
  );
};

export { PanelNewSection };
