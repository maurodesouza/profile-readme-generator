import { Settings } from 'types';

const pacmanSectionParser = (_: Record<string, unknown>, settings: Settings) => {
  const { github } = settings.user;

  return `<img src="https://raw.githubusercontent.com/${github}/${github}/output/pacman-contribution-graph.svg" alt="Pacman animation"/>`;
};

const pacmanWorkflowParser = () => {
  const content = `
name: Generate pacman animation

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
    timeout-minutes: 5

    steps:
      - name: generate pacman-contribution-graph.svg
        uses: abozanona/pacman-contribution-graph@main
        with:
          github_user_name: ${'${{ github.repository_owner }}'}


      - name: push pacman-contribution-graph.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${'${{ secrets.GITHUB_TOKEN }}'}
`.trim();

  return {
    file: 'pacman.yml',
    content,
  };
};

export { pacmanSectionParser, pacmanWorkflowParser };
