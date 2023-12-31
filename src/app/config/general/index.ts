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
      },

      socials: {
        iconBaseUrl:
          'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social',
        badgeBaseUrl: 'https://img.shields.io/static/v1',
      },

      profileViews: {
        badgeBaseUrl: 'https://visitor-badge.laobi.icu/badge',
        imageBaseUrl: 'https://profile-counter.glitch.me',
      },

      activities: {
        mediumBaseUrl:
          'https://github-read-medium-git-main.pahlevikun.vercel.app/latest',
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
