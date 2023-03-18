type UserSettings = {
  github?: string;
  [key: string]: unknown;
};

export type Settings = {
  user: UserSettings;
};
