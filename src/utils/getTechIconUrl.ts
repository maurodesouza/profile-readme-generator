const getTechIconUrl = (tech: string, icon: string) => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

  return `${baseUrl}/${tech}/${tech}-${icon}.svg`;
};

export { getTechIconUrl };
