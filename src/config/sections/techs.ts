const techsSectionConfig = {
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
};

export { techsSectionConfig };
