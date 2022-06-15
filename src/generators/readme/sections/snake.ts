import { Settings } from 'types';

const generateSnakeSection = (
  _: Record<string, unknown>,
  settings: Settings
) => {
  const { github } = settings.user;

  return `<img href="https://raw.githubusercontent.com/${github}/${github}/blob/output/snake.svg" alt="Snake animation"/>`;
};

export { generateSnakeSection };
