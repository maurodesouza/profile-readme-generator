const general = {
  urls: {
    app: 'https://profile-readme-generator.com',
    sections: {
      music: {
        spotify: {
          profileBaseUrl: 'https://open.spotify.com/user',
          recentlyPlayedBaseUrl:
            'https://spotify-recently-played-readme.vercel.app/api',
        },
      },

      techs: {
        iconBaseUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons',
      },

      stats: {
        imageBaseUrl: 'https://github-readme-stats.vercel.app/api',
        streakBaseUrl: 'https://streak-stats.demolab.com',
        trophiBaseUrl: 'https://github-profile-trophy.vercel.app',
        activityGraphBaseUrl:
          'https://github-readme-activity-graph.vercel.app/graph',
      },

      borders: {
        capsuleRenderBaseUrl: 'https://capsule-render.vercel.app/api',
      },

      socials: {
        iconBaseUrl:
          'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social',
        badgeBaseUrl: 'https://img.shields.io/static/v1',
      },

      profileViews: {
        laobi: 'https://visitor-badge.laobi.icu/badge',
        getloli: 'https://count.getloli.com',
      },

      activities: {
        mediumBaseUrl:
          'https://github-readme-medium-recent-article.vercel.app/medium',
      },
    },
  },

  storage: {
    prefix: '@prg-ms',
  },

  settings: {
    initial: {
      user: {},
    },

    preview: {
      user: {
        github: 'maurodesouza',
      },
    },
  },
};

export { general };
