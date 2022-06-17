const statsSectionConfig = {
  props: {
    content: {
      graphs: {
        stats: {
          height: 150,
          hide_title: false,
          hide_rank: false,
          show_icons: true,
          include_all_commits: true,
          count_private: true,
          disable_animations: false,
          theme: 'dracula',
          locale: 'en',
          hide_border: false,
        },

        languages: {
          height: 150,
          locale: 'en',
          hide_title: false,
          layout: 'compact',
          card_width: 320,
          langs_count: 5,
          theme: 'dracula',
          hide_border: false,
        },
      },
    },

    styles: {
      align: 'center',
    },
  },
};

export { statsSectionConfig };
