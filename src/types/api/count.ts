import { config } from 'config';

const {
  options: {
    count_api: { keys },
  },
} = config.envs;

export type CountApiKeys = keyof typeof keys;
