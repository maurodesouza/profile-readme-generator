import { observer } from 'mobx-react-lite';

import React from 'react';

import { Section } from '#/components/atoms/section';

import { actions } from 'lib/command';
import { useCanvas } from 'hooks';
import { CanvasStatesEnum } from 'types';

type CanvasSectionProps = {
  id: string;
};

export const CanvasSection = observer(function CanvasSection(
  props: React.PropsWithChildren<CanvasSectionProps>
) {
  const { id, children, ...rest } = props;

  const canvasStore = useCanvas();

  function onSelectSection() {
    if (isInAlert || canvasStore.previewMode) return;

    actions.canvas.setCurrentSection(id);
  }

  const childrenInfo = React.Children.only(children) as React.ReactPortal;

  const childrenProps = childrenInfo.props as any;

  const { float = 'none', clear } = childrenProps.styles || {};
  const isInAlert = childrenProps.state === CanvasStatesEnum.ALERT;

  const state = (() => {
    if (canvasStore.currentSection?.id === id)
      return { is: CanvasStatesEnum.SELECTED };
    if (isInAlert) return { is: CanvasStatesEnum.ALERT };
    if (canvasStore.previewMode) return { is: CanvasStatesEnum.PREVIEW };

    return { is: CanvasStatesEnum.DEFAULT };
  })();

  return (
    <Section.Container
      value={id}
      drag={!canvasStore.previewMode}
      float={float}
      clear={clear}
      data-sectionid={id}
      data-hasfloat={float !== 'none'}
      {...rest}
    >
      <Section.Wrapper onClick={onSelectSection} state={state.is}>
        {children}
      </Section.Wrapper>
    </Section.Container>
  );
});
