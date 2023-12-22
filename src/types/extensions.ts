export type Extension = {
  id: string;

  presentation: Record<string, object>;
};

export type ExtensionsGroup = Record<string, Record<string, object>>;
