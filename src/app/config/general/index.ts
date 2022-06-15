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
      },

      socials: {
        iconBaseUrl:
          'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social',
        badgeBaseUrl: 'https://img.shields.io/static/v1',
      },
    },
  },

  storage: {
    prefix: '@prg-ms',
  },
};

export { general };
