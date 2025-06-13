function getItems(locale: string) {
  const isBR = locale === 'pt-BR';

  return [
    ...(isBR
      ? [
          {
            image:
              'https://raw.githubusercontent.com/maurodesouza/maurodesouza/4379dc63fe618ac97c1443b5295861434024e869/assets/typescript-logo.svg',
            name: 'Boost Your Dev Career',
            description:
              'Master one of the most sought-after technologies in the world!',
            link: 'https://hotm.art/RONICaCT',
            linkLabel: 'Become a Typescript Master',
          },
        ]
      : [
          {
            image: '/assets/books/clean_code_book.jpg',
            name: 'Clean Code',
            description:
              'A Handbook of Agile Software Craftsmanship by Uncle Bob.',
            link: 'https://amzn.to/4bR3wGF',
            linkLabel: 'Get the book',
          },
        ]),

    {
      image: '/assets/books/clean_architecture_book.jpg',
      name: 'Clean Architecture',
      description: 'Software Architecture Solutions from Uncle Bob.',
      link: 'https://amzn.to/41Sg2RG',
      linkLabel: 'Get the book',
    },
    {
      image: '/assets/books-image.webp',
      name: 'Explore More Books',
      description:
        'Browse the full list of curated titles to boost your coding skills.',
      link: '/resources/books',
      linkLabel: 'More books',
      linkTarget: '_self',
    },
  ];
}

export { getItems };
