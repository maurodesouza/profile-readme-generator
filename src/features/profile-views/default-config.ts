const defaultProfileViewsSectionConfig = {
  props: {
    content: {
      provider: 'laobi',

      views: {
        laobi: {
          left_color: '',
          right_color: '',
        },

        getloli: {
          theme: 'gelbooru',
          padding: 7,
          offset: 0,
          scale: 1,
          align: 'top',
          pixelated: '1',
          darkmode: 'auto',
        },
      },
    },

    styles: {
      align: 'center',
      float: 'none',
    },
  },
};

export { defaultProfileViewsSectionConfig };
