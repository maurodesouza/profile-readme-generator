const getItems = (isPt = true) => [
  {
    image: '/assets/js-circle-icon.svg',
    name: 'Professional Full Stack JavaScript Programmer',
    description:
      'Become a javascript developer through a practical course focused on the job market!',
    link: 'https://go.hotmart.com/I71651104V?ap=5b5e',
    tags: ['course', 'pt-br'],
  },
  {
    image: '/assets/clean_code_book.jpg',
    name: 'Clean Code',
    description:
      'A Handbook of Agile Software Craftsmanship from the Legendary Robert C. Martin (“Uncle Bob”).',
    link: isPt ? 'https://amzn.to/3mvQx47' : 'https://amzn.to/3NAXHA0',
    tags: ['book'],
  },
  {
    image: '/assets/clean_architecture_book.jpg',
    name: 'Clean Architecture',
    description:
      'Practical Software Architecture Solutions from the Legendary Robert C. Martin (“Uncle Bob”).',
    link: isPt ? 'https://amzn.to/3muVE4E' : 'https://amzn.to/3NHYUFN',
    tags: ['book'],
  },
  {
    image: '/assets/eletronics-icon.svg',
    name: 'Improve your setup!',
    description: 'Everything you need to work, play, study or have fun!',
    link: isPt ? 'https://amzn.to/3aCGszL' : 'https://amzn.to/3QcCQon',
    tags: ['eletronics'],
  },
];

export { getItems };
