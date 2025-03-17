import SabadoNoite from '@/assets/images/photo/1.jpg';
import DomingoManha from '@/assets/images/photo/2.jpg';
import DomingoNoite from '@/assets/images/photo/3.jpg';
import SegundaManha from '@/assets/images/photo/4.jpg';
import SegundaNoite from '@/assets/images/photo/5.jpg';
import TercaManha from '@/assets/images/photo/6.jpg';
import TercaNoite from '@/assets/images/photo/7.jpg';
import PreCongresso from '@/assets/images/photo/8.jpg';
import Vigilia from '@/assets/images/photo/9.jpg';
import Esquenta from '@/assets/images/photo/10.jpg';

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const photoLinks = [
  {
    day: 'Pré Congresso - 2025',
    link: 'https://drive.google.com/drive/folders/1WI5KDCLUTN17BCMQtLMp32AWgD1iqLyK',
    preview: PreCongresso,
  },
  {
    day: 'Vigília - 2025',
    link: 'https://drive.google.com/drive/folders/1BHuOhR_vopHCvh5wYbWgdN0_xuwZa4Du',
    preview: Vigilia,
  },
  {
    day: 'Esquenta - 2025',
    link: 'https://drive.google.com/drive/folders/1_niMO66ySsTv46PVl3we5NTj64ttJvzI',
    preview: Esquenta,
  },
  {
    day: 'Sábado - Noite - 2025',
    link: 'https://photos.app.goo.gl/TG8dm5jJjPHrnojB8',
    preview: SabadoNoite,
  },
  {
    day: 'Domingo - Manhã - 2025',
    link: 'https://photos.app.goo.gl/FhrR68EhQqGrgC2X6',
    preview: DomingoManha,
  },
  {
    day: 'Domingo - Noite - 2025',
    link: 'https://photos.app.goo.gl/Q7qmdoNSiHyGCgmn6',
    preview: DomingoNoite,
  },
  {
    day: 'Segunda - Manhã - 2025',
    link: 'https://photos.app.goo.gl/qLryXfdHTbKNzvBD8',
    preview: SegundaManha,
  },
  {
    day: 'Segunda - Noite - 2025',
    link: 'https://photos.app.goo.gl/mRmEwB6yhy6KVtwm6',
    preview: SegundaNoite,
  },
  {
    day: 'Terça - Manhã - 2025',
    link: 'https://photos.app.goo.gl/FqXJVMJCXcvJHvwB9',
    preview: TercaManha,
  },
  {
    day: 'Terça - Noite - 2025',
    link: 'https://photos.app.goo.gl/kz8dD3sBu83npPsh8',
    preview: TercaNoite,
  },
  {
    day: 'Esquenta - 2024',
    link: 'https://photos.app.goo.gl/izWr3eVm19KcAkvL9',
    preview: TercaNoite,
  },
  {
    day: 'Meninas de Fé - 2024',
    link: 'https://photos.app.goo.gl/QFt3jp9HQJPupAMq7',
    preview: TercaNoite,
  },
  {
    day: 'Congresso Faina - 2024',
    link: 'https://photos.app.goo.gl/c3bN6XPTH9TaLajCA',
    preview: TercaNoite,
  },
  {
    day: 'Clama - 2024',
    link: 'https://photos.app.goo.gl/g5C9y3Vb9BiKJ1eFA',
    preview: TercaNoite,
  },
  {
    day: 'Consagração - 2024',
    link: 'https://photos.app.goo.gl/1rXRd77zbKLJWWqs8',
    preview: TercaNoite,
  },
  {
    day: 'Vigília - 2024',
    link: 'https://photos.app.goo.gl/aQAfgkwKxAMGsLrJ7',
    preview: TercaNoite,
  },
  {
    day: 'Congresso 2023',
    link: 'https://photos.app.goo.gl/SomMJv6GLrXNFbsT8',
    preview: TercaNoite,
  },
];
export default photoLinks;
