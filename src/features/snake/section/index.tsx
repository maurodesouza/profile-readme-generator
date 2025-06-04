import { GuardSection } from 'components/sections/guard';

type SnakeSectionProps = {
  id: string;
};

export function SnakeSection(props: SnakeSectionProps) {
  const { id } = props;

  return (
    <GuardSection sectionId={id}>
      <div className="grid place-items-center">
        <img
          className="w-full"
          src="/assets/snake.svg"
          alt="An animation of snake eating the github user contribuitions (like snake game)"
        />
      </div>
    </GuardSection>
  );
}
