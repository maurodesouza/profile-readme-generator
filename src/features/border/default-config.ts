const defaultImageSectionConfig = {
  props: {
    content: {
      provider: 'capsule-render',

      borders: {
        'capsule-render': {
          type: 'waving',
          height: 100,
          section: 'header',
          reversal: false,
          color: {
            type: 'theme',
            theme: 'cobalt',
          },

          text: '',
          fontSize: 70,
          fontColor: 'FFFFFF',
          fontAlign: 50,
          fontAlignY: 50,
          rotate: 0,
          stroke: 'FFFFFF',
          strokeWidth: 0,
          animation: '',

          desc: '',
          descSize: 20,
          descAlign: 50,
          descAlignY: 50,
        },
      },
    },
  },
};

export { defaultImageSectionConfig };
