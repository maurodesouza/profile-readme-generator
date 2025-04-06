const books = [
  {
    image: '/assets/books/clean_code_book.jpg',
    name: 'Clean Code',
    description:
      'A foundational guide to writing readable, maintainable, and elegant code. Essential for every developer who wants to improve code quality.',
    link: 'https://amzn.to/4bR3wGF',
  },
  {
    image: '/assets/books/refactoring_book.jpg',
    name: 'Refactoring',
    description:
      'Introduces proven techniques to improve existing code without breaking functionality. A go-to book for refactoring strategies.',
    link: 'https://amzn.to/4ccKSJw',
  },
  {
    image: '/assets/books/implementing_domaindriven_design_book.jpg',
    name: 'Implementing Domain-Driven Design',
    description:
      'A practical take on applying domain-driven design principles in real-world projects. Clear, actionable and deeply influential.',
    link: 'https://amzn.to/4iTLAxu',
  },
  {
    image: '/assets/books/clean_architecture_book.jpg',
    name: 'Clean Architecture',
    description:
      'Uncle Bob explores how to design systems with clear architecture boundaries and long-term maintainability in mind.',
    link: 'https://amzn.to/41Sg2RG',
  },
  {
    image:
      '/assets/books/patterns_of_enterprise_application_architecture_book.jpg',
    name: 'Patterns of Enterprise Application Architecture',
    description:
      'A classic by Martin Fowler that dives into enterprise application patterns — must-read for backend and architecture-focused devs.',
    link: 'https://amzn.to/41Sg2RG',
  },
  {
    image: '/assets/books/microservices_patterns_book.jpg',
    name: 'Microservices Patterns',
    description:
      'Provides real-world solutions and patterns for building reliable microservices. Great for architects and senior devs.',
    link: 'https://amzn.to/41PWw9G',
  },
  {
    image: '/assets/books/design_patterns_book.jpg',
    name: 'Design Patterns',
    description:
      'Defines reusable solutions to common design problems. A timeless reference every developer should have in their toolbox.',
    link: 'https://amzn.to/43nsTgY',
  },
  {
    image: '/assets/books/practical_microservices_book.jpg',
    name: 'Practical Microservices',
    description:
      'Explores event-driven architecture and practical microservices design. Hands-on and focused on real-world use cases.',
    link: 'https://amzn.to/4hPFPQa',
  },
  {
    image: '/assets/books/learning_domain_driven_design_book.jpg',
    name: 'Learning Domain Driven Design',
    description:
      'A modern introduction to domain-driven design, focusing on aligning technical design with business needs.',
    link: 'https://amzn.to/43Y2kPx',
  },
  {
    image: '/assets/books/the_mythical_man_month_book.jpg',
    name: 'The Mythical Man Month',
    description:
      'An insightful collection of essays on software engineering challenges, management, and timeless lessons from the past.',
    link: 'https://amzn.to/3XwR9cT',
  },
  {
    image: '/assets/books/the_pragmatic_programmer_book.jpg',
    name: 'The Pragmatic Programmer',
    description:
      'Teaches practical approaches and philosophies to becoming a better, more adaptable developer. A classic.',
    link: 'https://amzn.to/4j4Ogbh',
  },
  {
    image: '/assets/books/seven_languages_in_seven_weeks_book.jpg',
    name: 'Seven Languages in Seven Weeks',
    description:
      'Explores multiple programming paradigms through different languages. Great for expanding your thinking as a dev.',
    link: 'https://amzn.to/4iCE7D3',
  },
  {
    image: '/assets/books/refactoring_to_patterns_book.jpg',
    name: 'Refactoring to Patterns',
    description:
      'Combines refactoring techniques with pattern-based thinking. Useful for improving structure while keeping design clean.',
    link: 'https://amzn.to/41Uzkpe',
  },
  {
    image: '/assets/books/agile_software_development_book.jpg',
    name: 'Agile Software Development',
    description:
      'Covers agile principles and practices through the lens of clean code and team collaboration. Strong for real-world agile dev.',
    link: 'https://amzn.to/41Jiqv4',
  },
  {
    image: '/assets/books/effective_java_book.jpg',
    name: 'Effective Java',
    description:
      'A must-read for Java developers. Full of best practices and advice to write more robust and effective Java code.',
    link: 'https://amzn.to/4j8gjqt',
  },
  {
    image: '/assets/books/software_architecture_the_hard_parts_book.jpg',
    name: 'Software Architecture: The Hard Parts',
    description:
      'Explores the trade-offs and decisions involved in distributed architecture. A deep dive for senior engineers.',
    link: 'https://amzn.to/4l2uaQU',
  },
  {
    image: '/assets/books/working_effectively_with_legacy_code_book.jpg',
    name: 'Working Effectively with Legacy Code',
    description:
      'Practical techniques for improving and testing legacy code. Invaluable for working in older or monolithic codebases.',
    link: 'https://amzn.to/4iHLUPU',
  },
  {
    image: '/assets/books/seven_databases_in_seven_weeks_book.jpg',
    name: 'Seven Databases in Seven Weeks',
    description:
      'A whirlwind tour of modern databases, comparing their features and use cases. Great intro for devs touching data systems.',
    link: 'https://amzn.to/42iVP8P',
  },
  {
    image: '/assets/books/fundamentals_of_software_architecture_book.jpg',
    name: 'Fundamentals of Software Architecture',
    description:
      'Explains the core skills and mindset needed to be a successful software architect. Broad yet practical insights.',
    link: 'https://amzn.to/4l2udfy',
  },
  {
    image: '/assets/books/domaindriven_design_book.jpg',
    name: 'Domain-Driven Design',
    description:
      "Eric Evans' classic that introduced DDD. A dense but highly influential book for modeling complex systems.",
    link: 'https://amzn.to/3RnEvcu',
  },
  {
    image: '/assets/books/xunit_test_patterns_book.jpg',
    name: 'xUnit Test Patterns',
    description:
      'A detailed reference for writing good unit tests, with patterns to make them clean and maintainable.',
    link: 'https://amzn.to/4hNkIOo',
  },
  {
    image: '/assets/books/domaindriven_design_distilled_book.jpg',
    name: 'Domain-Driven Design Distilled',
    description:
      'A concise version of DDD by the same author, focused on making the core ideas more accessible and easier to apply.',
    link: 'https://amzn.to/43Y2t5x',
  },
  {
    image: '/assets/books/seven_concurrency_models_in_seven_weeks_book.jpg',
    name: 'Seven Concurrency Models in Seven Weeks',
    description:
      'Introduces different concurrency models in a practical, example-driven format. Perfect for broadening system thinking.',
    link: 'https://amzn.to/41M7zR7',
  },
];

export const recommended_resources = {
  books,
};
