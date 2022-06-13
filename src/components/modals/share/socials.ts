import { Linkedin, Facebook, Twitter } from '@styled-icons/feather';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

const socials = [
  {
    id: 1,
    icon: Linkedin,
    share: LinkedinShareButton,
  },
  {
    id: 2,
    icon: Twitter,
    share: TwitterShareButton,
  },
  {
    id: 3,
    icon: Facebook,
    share: FacebookShareButton,
  },
];

export { socials };
