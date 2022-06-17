import {
  PieChart,
  Share2,
  Github,
  Image,
  MessageSquare,
  Type,
  Activity,
  FileText,
  Music,
} from '@styled-icons/feather';

import { events } from 'app';
import { PanelsEnum, Sections } from 'types';

const contents = [
  {
    icon: FileText,
    onClick: () => events.panel.open('right', PanelsEnum.TEMPLATES),
    name: 'Templates',
  },
  {
    icon: Type,
    onClick: () => events.canvas.add(Sections.TEXT),
    name: 'Text',
  },
  {
    icon: PieChart,
    onClick: () => events.canvas.add(Sections.STATS),

    name: 'Stats',
  },
  {
    icon: Share2,
    onClick: () => events.canvas.add(Sections.TECHS),
    name: 'Techs',
  },
  {
    icon: Github,
    onClick: () => events.canvas.add(Sections.PROFILE_VIEWS),
    name: 'Profile views',
  },
  {
    icon: Image,
    onClick: () => events.canvas.add(Sections.IMAGE),
    name: 'Image',
  },
  {
    icon: MessageSquare,
    onClick: () => events.canvas.add(Sections.SOCIALS),
    name: 'Social media',
  },
  {
    icon: Activity,
    onClick: () => events.canvas.add(Sections.SNAKE),
    name: 'Snake',
  },
  {
    icon: FileText,
    onClick: () => events.canvas.add(Sections.ACTIVITIES),
    name: 'My activities',
  },
  {
    icon: Music,
    onClick: () => events.canvas.add(Sections.MUSIC),
    name: 'Music',
  },
];

export { contents };
