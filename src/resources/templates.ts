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
            icons: {
              javascript: {
                name: 'javascript',
                color: '#F7DF1E',
                alias: ['js'],
                tags: ['programming', 'language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=js',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/javascript/F7DF1E',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              typescript: {
                name: 'typescript',
                color: '#3178C6',
                alias: ['ts'],
                tags: ['programming', 'transpiler'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=ts',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/typescript/3178C6',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              react: {
                name: 'react',
                color: '#61DAFB',
                alias: [],
                tags: ['framework'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=react',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/react/61DAFB',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              nextjs: {
                name: 'nextjs',
                color: '#000000',
                alias: [],
                tags: ['framework'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=nextjs',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/nextdotjs/000000',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              storybook: {
                name: 'storybook',
                color: '#FF4785',
                alias: [],
                tags: ['framework', 'documentation', 'ui'],
                available_providers: ['simple_icons', 'shields', 'devicons'],
                providers: {
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/storybook/FF4785',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=black&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              nodejs: {
                name: 'nodejs',
                color: '#339933',
                alias: [],
                tags: ['javascript', 'language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=nodejs',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/nodedotjs/339933',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              nestjs: {
                name: 'nestjs',
                color: '#E0234E',
                alias: [],
                tags: ['framework'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=nestjs',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/nestjs/E0234E',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              jest: {
                name: 'jest',
                color: '#C21325',
                alias: [],
                tags: ['testing', 'javascript'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=jest',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/jest/C21325',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
            },
            config: {},
            styles: {
              height: 40,
            },
          },
          styles: {
            align: 'left',
            spacing: 12,
          },
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
        id: 'e2f81d66-11c9-4e5e-8c83-f3946dcc5893',
        type: 'techs',
        props: {
          content: {
            icons: {
              javascript: {
                name: 'javascript',
                color: '#F7DF1E',
                alias: ['js'],
                tags: ['programming', 'language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=js',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/javascript/F7DF1E',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              typescript: {
                name: 'typescript',
                color: '#3178C6',
                alias: ['ts'],
                tags: ['programming', 'transpiler'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=ts',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/typescript/3178C6',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              react: {
                name: 'react',
                color: '#61DAFB',
                alias: [],
                tags: ['framework'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=react',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/react/61DAFB',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              html5: {
                name: 'html5',
                color: '#E34F26',
                alias: ['html'],
                tags: ['programming', 'language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=html',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/html5/E34F26',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              css3: {
                name: 'css3',
                color: '#1572B6',
                alias: ['css'],
                tags: ['language', 'programming'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=css',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/css3/1572B6',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              python: {
                name: 'python',
                color: '#3776AB',
                alias: ['py'],
                tags: ['programming', 'language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=py',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/python/3776AB',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              csharp: {
                name: 'csharp',
                color: '#239120',
                alias: ['cs', 'c#'],
                tags: ['language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=cs',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/csharp/239120',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/C Sharp-239120?logo=csharp&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-line.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
            },
            config: {},
            styles: {
              height: '30',
            },
          },
          styles: {
            align: 'left',
            spacing: 12,
          },
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
            url: 'https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif',
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
        id: 'e2f81d66-11c9-4e5e-8c83-f3946dcc5893',
        type: 'techs',
        props: {
          content: {
            icons: {
              go: {
                name: 'go',
                color: '#00ADD8',
                alias: [],
                tags: ['language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=go',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/go/00ADD8',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-line.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {
                  devicons: {
                    variant: 1,
                  },
                },
              },
              rust: {
                name: 'rust',
                color: '#000000',
                alias: [],
                tags: ['programming', 'language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=rust',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/rust/000000',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              ruby: {
                name: 'ruby',
                color: '#CC342D',
                alias: [],
                tags: ['programming', 'language'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=ruby',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/ruby/CC342D',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Ruby-CC342D?logo=ruby&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {
                  devicons: {
                    variant: 3,
                  },
                },
              },
              'dot-net': {
                name: 'dot-net',
                color: '#512BD4',
                alias: ['dotnet'],
                tags: ['framework'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=dotnet',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/dotnet/512BD4',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {
                  devicons: {
                    variant: 3,
                  },
                },
              },
              firebase: {
                name: 'firebase',
                color: '#FFCA28',
                alias: [],
                tags: ['auth', 'hosting', 'storage', 'cloud'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=firebase',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/firebase/FFCA28',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {
                  devicons: {
                    variant: 1,
                  },
                },
              },
              amazonwebservices: {
                name: 'amazonwebservices',
                shortname: 'aws',
                color: '#232F3E',
                alias: ['aws'],
                tags: ['cloud', 'hosting', 'server'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=aws',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/amazonaws/232F3E',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Amazon AWS-232F3E?logo=amazonaws&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              circleci: {
                name: 'circleci',
                color: '#343434',
                alias: [],
                tags: ['integration', 'platform'],
                available_providers: ['simple_icons', 'shields', 'devicons'],
                providers: {
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/circleci/343434',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/CircleCI-343434?logo=circleci&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              kubernetes: {
                name: 'kubernetes',
                color: '#326CE5',
                alias: [],
                tags: ['container', 'deployment'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=kubernetes',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/kubernetes/326CE5',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {},
              },
              docker: {
                name: 'docker',
                color: '#2496ED',
                alias: [],
                tags: ['platform', 'deploy'],
                available_providers: [
                  'simple_icons',
                  'shields',
                  'skill_icons',
                  'devicons',
                ],
                providers: {
                  skill_icons: {
                    path: 'https://skillicons.dev/icons?i=docker',
                  },
                  simple_icons: {
                    path: 'https://cdn.simpleicons.org/docker/2496ED',
                  },
                  shields: {
                    path: 'https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge',
                  },
                  devicons: {
                    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                    variants: [
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg',
                    ],
                  },
                },
                currentProvider: 'devicons',
                config: {
                  devicons: {
                    variant: 3,
                  },
                },
              },
            },
            config: {},
            styles: {
              height: '40',
            },
          },
          styles: {
            align: 'left',
            spacing: 12,
          },
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
