import React from 'react';

import { events } from 'app';
import { CanvasStatesEnum } from 'types';

import * as S from './styles';

type BaseSectionProps = {
  id: string;
  selected: boolean;
  children: React.ReactNode;
};

const BaseSection = ({ id, children, selected }: BaseSectionProps) => {
  const handleSelectSection = () => {
    if (isInAlert) return;

    events.canvas.currentSection(id);
  };

  const { props } = React.Children.only(children) as React.ReactPortal;
  const { float = 'none' } = props.styles || {};

  const isInAlert = props.state === CanvasStatesEnum.ALERT;

  const getWrapperState = () => {
    let state: CanvasStatesEnum = CanvasStatesEnum.DEFAULT;

    if (selected) state = CanvasStatesEnum.SELECTED;
    if (isInAlert) state = CanvasStatesEnum.ALERT;

    return state;
  };

  const wrapperState = getWrapperState();

  return (
    <S.Container
      data-sectionid={id}
      data-hasfloat={float !== 'none'}
      onClick={handleSelectSection}
      value={id}
      float={float}
    >
      <S.Wrapper state={wrapperState}>{children}</S.Wrapper>
    </S.Container>
  );
};

export { BaseSection };
