import { GuardSection } from 'components/sections/guard';

const GAME_IMAGES: Record<string, string> = {
  pacman:
    'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/refs/heads/main/public/assets/pacman.svg',
  breakout:
    'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/refs/heads/main/public/assets/breakout.svg',
  galaga:
    'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/refs/heads/main/public/assets/galaga.svg',
  'puzzle-bobble':
    'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/refs/heads/main/public/assets/puzzle-bobble.svg',
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
