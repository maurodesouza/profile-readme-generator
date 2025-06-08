import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useDragControls, usePresence } from 'framer-motion';

import { Tile } from '../atoms/tile';
import { Icon } from '../atoms/icon';
import { Clickable } from '../atoms/clickable';
import { FlexibleRender } from 'components/helpers/flexible-render';

import { events } from '@events';
import { Renderable } from 'types';

type IconEditorProps = {
  id: string;
  img: {
    url: string;
    alt: string;
  };

  label: string;
  baseEditPath: string;

  refs: IconEditorRef[];

  slots?: {
    expansibleContent?: Renderable;
    supportingContent?: Renderable;
  };
};

export type IconEditorRef = {
  collapse: () => void;
};

const IconEditor: React.ForwardRefRenderFunction<
  IconEditorRef,
  IconEditorProps
> = (props: IconEditorProps, ref) => {
  const dragControls = useDragControls();
  const [isPresent, safeToRemove] = usePresence();

  const [isExpansible, setIsExpansible] = useState(false);

  function deleteIcon() {
    const path = `${props.baseEditPath}.${props.id}`;

    events.canvas.edit({ path, value: undefined });
  }

  function toggleExpansible() {
    if (!isExpansible) collapseAll();

    setIsExpansible(!isExpansible);
  }

  function collapse() {
    setIsExpansible(false);
  }

  function collapseAll() {
    props.refs.forEach(item => item?.collapse());
  }

  useImperativeHandle(
    ref,
    () => ({
      collapse,
    }),
    []
  );

  useEffect(() => {
    if (!isPresent) setTimeout(safeToRemove!, 1000);
  }, [isPresent]);

  const hasExpansibleContent = Boolean(props.slots?.expansibleContent);

  return (
    <Tile.Sortable
      value={props.id}
      dragListener={false}
      dragControls={dragControls}
      layout
    >
      <Tile.Container>
        <Tile.Drag
          onPointerDown={event => [collapseAll(), dragControls.start(event)]}
        />

        <Tile.Img key={props.img.alt} alt={props.img.alt} src={props.img.url} />

        <Tile.Content className="flex flex-col justify-between">
          <Tile.Label>{props.label}</Tile.Label>

          <FlexibleRender render={props.slots?.supportingContent} />
        </Tile.Content>

        <Tile.Actions>
          <Clickable.Button
            size="icon"
            variant="icon"
            tone="danger"
            onClick={deleteIcon}
          >
            <Icon name="trash" />
          </Clickable.Button>

          {hasExpansibleContent && (
            <Clickable.Button
              size="icon"
              variant="icon"
              tone="brand"
              onClick={toggleExpansible}
            >
              <Icon name="edit-2" />
            </Clickable.Button>
          )}
        </Tile.Actions>
      </Tile.Container>

      <Tile.Expansible
        animate={isExpansible && hasExpansibleContent ? 'open' : 'closed'}
      >
        <FlexibleRender render={props.slots?.expansibleContent} />
      </Tile.Expansible>
    </Tile.Sortable>
  );
};

const IconEditorForward = forwardRef(IconEditor);
export { IconEditorForward as IconEditor };
