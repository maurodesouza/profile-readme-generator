'use client';

import { observer } from 'mobx-react-lite';

import { GuardSection } from '#/components/organisms/sections/guard';

type SnakeSectionProps = {
  id: string;
};

export const SnakeSection = observer(function SnakeSection(
  props: SnakeSectionProps
) {
  const { id } = props;

  return (
    <GuardSection sectionId={id}>
      <div className="grid place-items-center">
        <img
          className="w-full"
          src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/a0f0a3d2ab9631b370485e79018c48c67b139ab6/public/assets/snake.svg"
          alt="An animation of snake eating the github user contributions (like snake game)"
        />
      </div>
    </GuardSection>
  );
});
