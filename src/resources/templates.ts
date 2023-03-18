const templates = [
  {
    inspired: 'https://github.com/maurodesouza',
    template: [
      {
        type: 'text',
        props: {
          content: { text: "Hey 👋 What's up?", as: 'h1' },
          styles: { align: 'left' },
        },
      },
      {
        type: 'text',
        props: {
          content: { text: "My name is ... and I'm a ..., from ....", as: 'p' },
          styles: { align: 'left' },
        },
      },
      {
        type: 'text',
        props: {
          content: { text: 'About me', as: 'h2' },
          styles: { align: 'left' },
        },
      },
      {
        type: 'text',
        props: {
          content: {
            text: "✨ Creating bugs since ...\n📚 I'm currently learning ...\n🎯 Goals: ...\n🎲 Fun fact: ...",
            as: 'p',
          },
          styles: { align: 'left' },
        },
      },
      {
        type: 'text',
        props: {
          content: { text: 'I code with', as: 'h2' },
          styles: { align: 'left' },
        },
      },
      {
        type: 'techs',
        props: {
          content: {
            techs: {
              javascript: { icon: 'original' },
              typescript: { icon: 'original' },
              react: { icon: 'original' },
              nextjs: { icon: 'original' },
              storybook: { icon: 'original' },
              nodejs: { icon: 'original' },
              nestjs: { icon: 'plain' },
              jest: { icon: 'plain' },
            },
            styles: { height: 40 },
          },
          styles: { align: 'left', spacing: 12 },
        },
      },
    ],
  },

  {
    inspired: 'https://github.com/rafaballerini',
    template: [
      {
        type: 'text',
        props: {
          content: {
            text: "Hi 👋! My name is ... and I'm a ..., from ....",
            as: 'h2',
          },
          styles: { align: 'left' },
        },
      },
      {
        type: 'stats',
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
              },
            },
          },
          styles: { align: 'center' },
          state: 'default',
        },
      },
      {
        type: 'image',
        props: {
          content: { url: 'https://i.imgflip.com/65efzo.gif' },
          styles: { align: 'center', height: '150', float: 'right' },
        },
      },
      {
        type: 'techs',
        props: {
          content: {
            techs: {
              javascript: { icon: 'original' },
              typescript: { icon: 'plain' },
              react: { icon: 'original' },
              html5: { icon: 'original' },
              css3: { icon: 'original' },
              python: { icon: 'original' },
              csharp: { icon: 'original' },
            },
            styles: { height: '30' },
          },
          styles: { align: 'left', spacing: 12 },
        },
      },
      {
        type: 'socials',
        props: {
          content: {
            socials: {
              youtube: {
                icon: 'default',
                message: 'Youtube',
                color: 'FF0000',
                label: '',
                logo: 'youtube',
                logoColor: 'white',
              },
              instagram: {
                message: 'Instagram',
                color: 'E4405F',
                label: '',
                logo: 'instagram',
                logoColor: 'white',
                icon: 'default',
              },
              twitch: {
                message: 'Twitch',
                color: '9146FF',
                label: '',
                logo: 'twitch',
                logoColor: 'white',
                icon: 'default',
              },
              discord: {
                icon: 'default',
                message: 'Discord',
                color: '7289DA',
                label: '',
                logo: 'discord',
                logoColor: 'white',
              },
              gmail: {
                message: 'Gmail',
                color: 'D14836',
                label: '',
                logo: 'gmail',
                logoColor: 'white',
                icon: 'default',
              },
              linkedin: {
                icon: 'default',
                message: 'LinkedIn',
                color: '0077B5',
                label: '',
                logo: 'linkedin',
                logoColor: 'white',
              },
            },
            styles: { style: 'for-the-badge', type: 'badge', height: '35' },
          },
          styles: { align: 'left', spacing: 12 },
        },
      },
      {
        type: 'snake',
        props: { styles: { clear: true }, state: 'default' },
      },
    ],
  },

  {
    inspired: 'https://github.com/itsZed0',
    template: [
      {
        type: 'image',
        props: {
          content: {
            url: 'https://camo.githubusercontent.com/62da68eb62b1e5f175f7d1f0191dd89a653d7908feb22d37d4a0ab07365d6791/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4d3967624264396e6244724f5475314d71782f67697068792e676966',
          },
          styles: { align: 'center', height: '150', float: 'none' },
        },
      },
      {
        type: 'socials',
        props: {
          content: {
            socials: {
              linkedin: {
                icon: 'default',
                message: 'LinkedIn',
                color: '0077B5',
                label: '',
                logo: 'linkedin',
                logoColor: 'white',
              },
              youtube: {
                icon: 'default',
                message: 'Youtube',
                color: 'FF0000',
                label: '',
                logo: 'youtube',
                logoColor: 'white',
              },
              twitter: {
                message: 'Twitter',
                color: '1DA1F2',
                label: '',
                logo: 'twitter',
                logoColor: 'white',
                icon: 'default',
              },
            },
            styles: { style: 'for-the-badge', type: 'badge', height: '25' },
          },
          styles: { align: 'center', spacing: 12 },
        },
      },
      {
        type: 'profile-views',
        props: {
          content: {
            type: 'badge',
            props: { left_color: '', right_color: '' },
          },
          styles: { align: 'center', float: 'none' },
          state: 'default',
        },
      },
      {
        type: 'text',
        props: {
          content: { text: 'hey there 👋', as: 'h1' },
          styles: { align: 'center' },
        },
      },
      {
        type: 'text',
        props: {
          content: { text: '👩‍💻  About Me ', as: 'h3' },
          styles: { align: 'left' },
        },
      },
      {
        type: 'text',
        props: {
          content: {
            text: "I'm ... from ....\n\n- 🔭 I’m working as ...\n- 📚 I'm currently learning ...\n- ⚡ In my free time I ...",
            as: 'p',
          },
          styles: { align: 'left' },
        },
      },
      {
        type: 'text',
        props: {
          content: { text: '🛠 Language and tools', as: 'h3' },
          styles: { align: 'left' },
        },
      },
      {
        type: 'techs',
        props: {
          content: {
            techs: {
              go: { icon: 'original-wordmark' },
              rust: { icon: 'plain' },
              ruby: { icon: 'plain-wordmark' },
              'dot-net': { icon: 'plain-wordmark' },
              firebase: { icon: 'plain-wordmark' },
              amazonwebservices: { icon: 'original', short_name: 'aws' },
              circleci: { icon: 'plain' },
              kubernetes: { icon: 'plain' },
              docker: { icon: 'plain-wordmark' },
            },
            styles: { height: '40' },
          },
          styles: { align: 'left', spacing: 12 },
        },
      },
      {
        type: 'text',
        props: {
          content: { text: '🔥   My Stats :', as: 'h3' },
          styles: { align: 'left' },
        },
      },
      {
        type: 'stats',
        props: {
          content: {
            graphs: {
              stats: {
                height: '250',
                hide_title: false,
                hide_rank: false,
                show_icons: true,
                include_all_commits: true,
                count_private: true,
                disable_animations: false,
                theme: 'dracula',
                locale: 'en',
                hide_border: false,
                show: false,
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
                show: false,
                order: 2,
              },
              streak: {
                height: '220',
                locale: 'en',
                mode: 'daily',
                theme: 'dark',
                hide_border: false,
                border_radius: 5,
                date_format: '',
                show: true,
                order: 3,
              },
            },
          },
          styles: { align: 'center', direction: 'row' },
          state: 'default',
        },
      },
    ],
  },
];

export { templates };
