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
          content: { text: "My name is ... and i'm a ..., from ....", as: 'p' },
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
];

export { templates };
