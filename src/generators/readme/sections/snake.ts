import { Settings } from 'types';

const generateSnakeSection = (
  _: Record<string, unknown>,
  settings: Settings
) => {
  const { github } = settings.user;

  return `<img src="https://raw.githubusercontent.com/${github}/${github}/output/snake.svg" alt="Snake animation"/>`;
};

export { generateSnakeSection };
