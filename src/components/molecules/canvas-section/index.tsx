'use client';

import { observer } from 'mobx-react-lite';

import React from 'react';

import { Section } from '#/components/atoms/section';

import { actions } from '#/lib/command';
import { useCanvas } from '#/hooks';
import { CanvasStatesEnum } from '#/types';

type CanvasSectionProps = {
  id: string;
};

export const CanvasSection = observer(function CanvasSection(
  props: React.PropsWithChildren<CanvasSectionProps>
) {
  const { id, children, ...rest } = props;

  const canvasStore = useCanvas();

  function onSelectSection() {
    if (isInAlert || canvasStore.$isInPreviewMode) return;

    actions.canvas.section.activate(id);
  }

  const childrenInfo = React.Children.only(children) as React.ReactPortal;

  const childrenProps = childrenInfo.props as any;

  const { float = 'none', clear } = childrenProps.styles || {};
  const isInAlert = childrenProps.state === CanvasStatesEnum.ALERT;

  const state = (() => {
    if (canvasStore.activeSectionId === id)
      return { is: CanvasStatesEnum.SELECTED };
    if (isInAlert) return { is: CanvasStatesEnum.ALERT };
    if (canvasStore.$isInPreviewMode) return { is: CanvasStatesEnum.PREVIEW };

    return { is: CanvasStatesEnum.DEFAULT };
  })();

  return (
    <Section.Container
      value={id}
      drag={!canvasStore.$isInPreviewMode}
      float={float}
      clear={clear}
      data-sectionid={id}
      data-hasfloat={float !== 'none'}
      {...rest}
      data-testid="canvas-section"
    >
      <Section.Wrapper onClick={onSelectSection} state={state.is}>
        {children}
      </Section.Wrapper>
    </Section.Container>
  );
});
