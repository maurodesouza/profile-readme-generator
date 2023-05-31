export enum IconProviders {
  SKILL_ICONS = 'skill_icons',
  SIMPLE_ICONS = 'simple_icons',
  SHIELDS = 'shields',
  DEVICONS = 'devicons',
}

type Config = {
  [key in IconProviders]?: Record<string, unknown>;
};

type Provider = {
  path: string;
  variants?: string[];
};

type Providers = {
  [key in IconProviders]?: Provider;
};

export type GroupIcons = {
  [key in IconProviders]?: Icon[];
};

export type Icon = {
  name: string;
  shortname?: string;
  color: string;
  tags: string[];
  alias: string[];
  available_providers: IconProviders[];
  providers: Providers;
};

export type EditableIcon = Icon & {
  currentProvider: `${IconProviders}`;
  config: Config;
};
