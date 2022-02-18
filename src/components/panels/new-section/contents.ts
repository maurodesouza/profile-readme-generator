import {
  PieChart,
  Share2,
  Github,
  Image,
  MessageSquare,
} from '@styled-icons/feather';

import { Sections } from 'types';

const contents = [
  {
    icon: PieChart,
    sectionType: Sections.STATS,
    name: 'Estatísticas',
  },
  {
    icon: Share2,
    sectionType: Sections.TECHS,
    name: 'Techs',
  },
  {
    icon: Github,
    sectionType: Sections.PROFILE_VIEWS,
    name: 'Visualizações de perfil',
  },
  {
    icon: Image,
    sectionType: Sections.IMAGE,
    name: 'Imagem',
  },
  {
    icon: MessageSquare,
    sectionType: Sections.SOCIALS,
    name: 'Mídias sociais',
  },
];

export { contents };
