import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

const socials = [
  {
    id: 1,
    icon: 'linkedin',
    share: LinkedinShareButton,
  },
  {
    id: 2,
    icon: 'twitter',
    share: TwitterShareButton,
  },
  {
    id: 3,
    icon: 'facebook',
    share: FacebookShareButton,
  },
];

export { socials };
