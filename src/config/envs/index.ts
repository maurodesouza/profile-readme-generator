const envs = {
  environment: process.env.NODE_ENV,

  urls: {
    count_api: process.env.COUNT_API_URL,
  },

  options: {
    count_api: {
      namespace: process.env.COUNT_API_NAMESPACE,
      keys: {
        visits: process.env.COUNT_PAGE_VIEW_KEY,
        'generated-readmes': process.env.COUNT_GENERATED_READMES_KEY,
      },
    },
  },
};

export { envs };
