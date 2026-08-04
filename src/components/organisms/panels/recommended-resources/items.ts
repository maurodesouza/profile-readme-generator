import { ResourceItemMapperProps } from '#/components/molecules/resource-items/mapper';

function getItems() {
  return [
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
