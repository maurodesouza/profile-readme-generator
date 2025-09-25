import { ResourceItemMapperProps } from 'components/ui/primitives/compound/resource-items/mapper';

function getItems(locale: string) {
  const isBR = locale === 'pt-BR';

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

    ...(isBR
      ? [
          {
            imageSrc:
              'https://raw.githubusercontent.com/maurodesouza/maurodesouza/4379dc63fe618ac97c1443b5295861434024e869/assets/typescript-logo.svg',
            title: 'Boost Your Dev Career',
            description:
              'Master one of the most sought-after technologies in the world!',
            link: 'https://hotm.art/RONICaCT',
            linkLabel: 'Become a Typescript Master',
          },
        ]
      : [
          {
            imageSrc: '/assets/books/clean_code_book.jpg',
            title: 'Clean Code',
            description:
              'A Handbook of Agile Software Craftsmanship by Uncle Bob.',
            link: 'https://amzn.to/4bR3wGF',
            linkLabel: 'Get the book',
          },
        ]),

    {
      imageSrc: '/assets/books/clean_architecture_book.jpg',
      title: 'Clean Architecture',
      description: 'Software Architecture Solutions from Uncle Bob.',
      link: 'https://amzn.to/41Sg2RG',
      linkLabel: 'Get the book',
    },
    {
      imageSrc: '/assets/books-image.webp',
      title: 'Explore More Books',
      description:
        'Browse the full list of curated titles to boost your coding skills.',
      link: '/resources/books',
      linkLabel: 'More books',
      linkTarget: '_self',
    },
  ] as ResourceItemMapperProps[];
}

export { getItems };
