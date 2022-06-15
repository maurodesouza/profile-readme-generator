import { envs } from 'app/config/envs';

const {
  options: {
    count_api: { keys },
  },
} = envs;

export type CountApiKeys = keyof typeof keys;
