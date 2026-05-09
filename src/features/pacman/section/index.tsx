import { GuardSection } from 'components/sections/guard';

const GAME_IMAGES: Record<string, string> = {
  pacman:
    'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/a0f0a3d2ab9631b370485e79018c48c67b139ab6/public/assets/pacman.svg',
  breakout:
    'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/a0f0a3d2ab9631b370485e79018c48c67b139ab6/public/assets/breakout.svg',
  galaga:
    'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/a0f0a3d2ab9631b370485e79018c48c67b139ab6/public/assets/galaga.svg',
  'puzzle-bobble':
    'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/a0f0a3d2ab9631b370485e79018c48c67b139ab6/public/assets/pacman4.svg',
};

type PacmanSectionProps = {
  id: string;
  game?: string;
};

export function PacmanSection(props: PacmanSectionProps) {
  const { id, game = 'pacman' } = props;

  const src = GAME_IMAGES[game] ?? GAME_IMAGES['pacman'];

  return (
    <GuardSection sectionId={id}>
      <div className="grid place-items-center">
        <img
          className="w-full"
          src={src}
          alt={`An animation of ${game} eating the github user contributions (like ${game} game)`}
        />
      </div>
    </GuardSection>
  );
}
