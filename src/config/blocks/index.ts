import { Blocks } from 'types';

const defaultBlocksProps = {
  [Blocks.STATS]: {
    props: {
      content: {
        graphs: {
          stats: {
            hide_title: false,
            hide_rank: false,
            show_icons: true,
            include_all_commits: true,
            count_private: true,
            disable_animations: false,
            theme: 'dracula',
            locale: 'pt-br',
            hide_border: false,
          },

          languages: {
            locale: 'pt-br',
            hide_title: false,
            layout: 'compact',
            theme: 'dracula',
            hide_border: false,
          },
        },

        styles: {
          align: 'center',
          direction: 'row',
        },

        from: {
          username: 'maurodesouza',
        },
      },
    },
  },
};

export { defaultBlocksProps };
