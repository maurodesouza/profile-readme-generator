const getItems = () => [
  {
    image: '/assets/books/clean_code_book.jpg',
    name: 'Clean Code',
    description: 'A Handbook of Agile Software Craftsmanship by Uncle Bob.',
    link: 'https://amzn.to/4bR3wGF',
    linkLabel: 'Get the book',
  },
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

export { getItems };
