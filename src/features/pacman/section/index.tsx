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
          src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/a0f0a3d2ab9631b370485e79018c48c67b139ab6/public/assets/pacman.svg"
          alt="An animation of pacman eating the github user contributions (like pacman game)"
        />
      </div>
    </GuardSection>
  );
}
