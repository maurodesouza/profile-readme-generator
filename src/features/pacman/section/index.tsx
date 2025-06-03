import { GuardSection } from 'components/sections/guard';

type PacmanSectionProps = {
  id: string;
};

export function PacmanSection(props: PacmanSectionProps) {
  const { id } = props;

  return (
    <GuardSection sectionId={id}>
      <div className="grid place-items-center">
        <img
          className="w-full"
          src="/assets/pacman.svg"
          alt="An animation of pacman eating the github user contribuitions (like pacman game)"
        />
      </div>
    </GuardSection>
  );
}
