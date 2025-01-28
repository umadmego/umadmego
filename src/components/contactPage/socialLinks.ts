import InstagramIcon from '@/assets/svgs/contact/socials/instagram.svg';
import FacebookIcon from '@/assets/svgs/contact/socials/facebook.svg';
import YoutubeIcon from '@/assets/svgs/contact/socials/youtube.svg';

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const socialLinks: Link[] = [
  {
    alt: 'Youtube',
    src: YoutubeIcon,
    destination: 'https://www.youtube.com/@umadmego',
  },
  {
    alt: 'Facebook',
    src: FacebookIcon,
    destination: 'https://www.facebook.com/umadmego.gyn',
  },
  {
    alt: 'Instagram',
    src: InstagramIcon,
    destination: 'https://www.instagram.com/umadmego/',
  },
];

export default socialLinks;
