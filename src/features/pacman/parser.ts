import { Sections, Settings } from 'types';

const pacmanSectionParser = (
  config: Record<string, unknown>,
  settings: Settings
) => {
  const { github } = settings.user;
  const game = (config?.game as string) ?? 'pacman';

  return `
    <picture data-importer="${Sections.PACMAN}">
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${github}/${github}/pacman-output/${game}-contribution-graph-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${github}/${github}/pacman-output/${game}-contribution-graph.svg">
      <img alt="pacman contribution graph" src="https://raw.githubusercontent.com/${github}/${github}/pacman-output/${game}-contribution-graph.svg">
    </picture>
  `;
};

const pacmanWorkflowParser = (config: Record<string, unknown>) => {
  const game = (config?.game as string) ?? 'pacman';
  const content = `
name: Generate arcade animation

on:
  schedule: # execute every 12 hours
    - cron: "* */12 * * *"

  workflow_dispatch:

  push:
    branches:
    - main

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 20

    steps:
      - name: generate pacman-contribution-graph.svg
        uses: abozanona/pacman-contribution-graph@main
        with:
          github_user_name: ${'${{ github.repository_owner }}'}
          games: '${game}'


      - name: push ${game}-contribution-graph.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: pacman-output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${'${{ secrets.GITHUB_TOKEN }}'}
`.trim();

  return {
    file: 'arcade.yml',
    content,
  };
};

export { pacmanSectionParser, pacmanWorkflowParser };
