import React from 'react';

import { Section } from 'components/ui/primitives/atoms/section';

import { events } from 'app';
import { useCanvas } from 'hooks';
import { CanvasStatesEnum } from 'types';

type CanvasSectionProps = {
  id: string;
};

export function CanvasSection(
  props: React.PropsWithChildren<CanvasSectionProps>
) {
  const { id, children } = props;

  const { previewMode, currentSection } = useCanvas();

  function onSelectSection() {
    if (isInAlert || previewMode) return;

    events.canvas.currentSection(id);
  }

  const childrenInfo = React.Children.only(children) as React.ReactPortal;

  const childrenProps = childrenInfo.props as any;

  const { float = 'none', clear } = childrenProps.styles || {};
  const isInAlert = childrenProps.state === CanvasStatesEnum.ALERT;

  const state = (() => {
    if (currentSection?.id === id) return { is: CanvasStatesEnum.SELECTED };
    if (isInAlert) return { is: CanvasStatesEnum.ALERT };
    if (previewMode) return { is: CanvasStatesEnum.PREVIEW };

    return { is: CanvasStatesEnum.DEFAULT };
  })();

  return (
    <Section.Container
      value={id}
      drag={!previewMode}
      float={float}
      clear={clear}
      data-sectionid={id}
      data-hasfloat={float !== 'none'}
    >
      <Section.Wrapper onClick={onSelectSection} state={state.is}>
        {children}
      </Section.Wrapper>
    </Section.Container>
  );
}
