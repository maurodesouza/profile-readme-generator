import { MouseEvent } from 'react';
import { Reorder } from 'framer-motion';

import { Trash as TrashIcon } from '@styled-icons/feather';
import { sectionMap, BaseSection } from 'components';

import { events } from 'app';
import { useCanvas } from 'hooks';

import { ContextMenus } from 'types';
import * as S from './styles';

const Canvas = () => {
  const { sections, currentSection } = useCanvas();

  const sectionIds = sections.map(section => section.id);

  const handleOpenContextMenu = (e: MouseEvent) => {
    events.contextmenu.open(ContextMenus.SECTION, e);
  };

  return (
    <S.Container onContextMenu={handleOpenContextMenu}>
      {!!sections.length && (
        <S.ClearButton onClick={events.canvas.clear}>
          <TrashIcon size={16} />
        </S.ClearButton>
      )}

      <Reorder.Group
        axis="y"
        values={sectionIds}
        onReorder={events.canvas.reorder}
      >
        {sections.map(({ type, id, props }) => {
          const Section = sectionMap[type];

          return (
            <BaseSection key={id} id={id} selected={id === currentSection?.id}>
              <Section id={id} {...props} />
            </BaseSection>
          );
        })}
      </Reorder.Group>
    </S.Container>
  );
};

export { Canvas };
