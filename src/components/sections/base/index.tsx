import React from 'react';
import { events } from '@events/base';

import * as S from './styles';

type BaseSectionProps = {
  id: string;
  selected: boolean;
  children: React.ReactNode;
};

const BaseSection = ({ id, children, selected }: BaseSectionProps) => {
  const handleSelectSection = () => {
    events.canvas.currentSection(id);
  };

  const { props } = React.Children.only(children) as React.ReactPortal;
  const { float = 'none' } = props.styles || {};

  return (
    <S.Container
      data-sectionid={id}
      onClick={handleSelectSection}
      value={id}
      float={float}
    >
      <S.Wrapper selected={selected}>{children}</S.Wrapper>
    </S.Container>
  );
};

export { BaseSection };
