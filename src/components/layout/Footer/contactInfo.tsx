import Location from '@/assets/svgs/contact/location.svg';
import Email from '@/assets/svgs/contact/email.svg';
import Phone from '@/assets/svgs/contact/phone.svg';

interface Info {
  icon: string;
  text: string;
  type?: 'email' | 'phone';
  alt: string;
}

const contactInfo: Info[] = [
  {
    icon: Location,
    text: 'R. 208, 930 - St. Leste Vila Nova, Goiânia - GO, 74635-055',
    alt: 'Address',
  },
  {
    icon: Email,
    text: 'marketing.umadmego@gmail.com',
    type: 'email',
    alt: 'Email',
  },
];

export default contactInfo;
