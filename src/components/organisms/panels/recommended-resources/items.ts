import { ResourceItemMapperProps } from '#/components/molecules/resource-items/mapper';

function getItems() {
  return [
    {
      imageSrc: '/assets/resources/toffugy.svg',
      title: 'Toffugy',
      description:
        '🌍 Learn a language by exploring 3D places — walk into a room, point at things and learn what they are called 🚀',
      link: 'https://toffugy.com',
      linkLabel: '👉 Start learning 👈',

      template: 'Short',
    },
    {
      imageSrc: '/assets/resources/fragiola.svg',
      title: 'Fragiola',
      description:
        '🧩 An ecosystem of headless components — behavior, state and accessibility built in, the look is yours 🚀',
      link: 'https://fragiola.com',
      linkLabel: '👉 Explore the projects 👈',

      template: 'Short',
    },
    {
      imageSrc: '/assets/resources/uncle-sam.webp',
      title: 'Boost Your English',
      subtitle: 'Real devs debug in English.',
      description:
        '💰 Get 70% OFF your first trial lesson and start to boost your english with top tutors worldwide on Preply 🚀',
      link: 'https://preply.com/en/?pref=ODQyMDg3Mw==&id=1758805899.506805&ep=w1',
      linkLabel: '👉 Get 70% OFF 👈',

      template: 'Highlighted',
    },
  ] as ResourceItemMapperProps[];
}

export { getItems };
