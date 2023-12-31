const defaultStatsSectionConfig = {
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
          show: true,
          order: 1,
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
          show: true,
          order: 2,
        },

        streak: {
          height: 150,
          locale: 'en',
          mode: 'daily',
          theme: 'dracula',
          hide_border: false,
          border_radius: 5,
          date_format: '',
          show: false,
          order: 3,
        },

        trophy: {
          theme: 'dracula',
          column: -1,
          row: 1,
          'margin-w': 8,
          'margin-h': 8,
          'no-bg': false,
          'no-frame': false,
          show: false,
          order: 4,
        },
      },
    },

    styles: {
      align: 'center',
      direction: 'row',
    },
  },
};

export { defaultStatsSectionConfig };
