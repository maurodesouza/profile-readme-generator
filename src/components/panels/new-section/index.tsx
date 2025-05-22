import { IconName } from 'lucide-react/dynamic';

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
    <div className="h-full w-[calc(100%_+_var(--spacing-md))] grid grid-cols-2 items-start content-start gap-md pr-xs overflow-y-scroll scrollbar">
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
  );
};

export { PanelNewSection };
