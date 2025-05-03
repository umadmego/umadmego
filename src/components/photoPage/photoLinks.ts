import SabadoNoite2025 from '@/assets/images/photo/sabadonoite2025.jpg';
import DomingoManha2025 from '@/assets/images/photo/domingomanha2025.jpg';
import DomingoNoite2025 from '@/assets/images/photo/domingonoite2025.jpg';
import SegundaManha2025 from '@/assets/images/photo/segundamanha2025.jpg';
import SegundaNoite2025 from '@/assets/images/photo/segundanoite2025.jpg';
import TercaManha2025 from '@/assets/images/photo/tercamanha2025.jpg';
import TercaNoite2025 from '@/assets/images/photo/tercanoite2025.jpg';
import SabadoNoite2024 from '@/assets/images/photo/sabadonoite2024.jpg';
import DomingoManha2024 from '@/assets/images/photo/domingomanha2024.jpg';
import DomingoNoite2024 from '@/assets/images/photo/domingonoite2024.jpg';
import SegundaNoite2024 from '@/assets/images/photo/segundanoite2024.jpg';
import TercaManha2024 from '@/assets/images/photo/tercamanha2024.jpg';
import TercaNoite2024 from '@/assets/images/photo/tercanoite2024.jpg';
import Vigilia2024 from '@/assets/images/photo/vigilia2024.jpg';
import Esquenta2024 from '@/assets/images/photo/esquenta2024.jpg';
import Meninasdefe2024 from '@/assets/images/photo/meninasdefe2024.jpg';
import Congresso2023 from '@/assets/images/photo/congresso2023.jpg';
import Consagracao2024 from '@/assets/images/photo/consagracao2024.jpg';
import Faina2024 from '@/assets/images/photo/faina2024.jpg';
import Clama2024 from '@/assets/images/photo/clama2024.jpg';
import PreCongresso2025 from '@/assets/images/photo/precongresso2025.jpg';
import Vigilia2025 from '@/assets/images/photo/vigilia2025.jpg';
import Esquenta2025 from '@/assets/images/photo/esquenta2025.jpg';
import Meninasdefe2025 from '@/assets/images/photo/Meninasdefe2025.jpg';
import NiverFabio from '@/assets/images/photo/niverFabio.jpeg';

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const photoLinks = [
  {
    day: 'Meninas de Fé - 2025',
    link: 'https://photos.app.goo.gl/kNiEDWLYzrxQ1WJz8',
    preview: Meninasdefe2025,
  },
  {
    day: 'Pré Congresso - 2025',
    link: 'https://photos.app.goo.gl/uP46b634Rn2GgwqV7',
    preview: PreCongresso2025,
  },
  {
    day: 'Vigília - 2025',
    link: 'https://photos.app.goo.gl/5EsU7mLcdefMAP1H6',
    preview: Vigilia2025,
  },
  {
    day: 'Esquenta - 2025',
    link: 'https://photos.app.goo.gl/bwTdEdA9H2y7HUuB7',
    preview: Esquenta2025,
  },
  {
    day: 'Congresso 2025 - Sábado - Noite',
    link: 'https://photos.app.goo.gl/TG8dm5jJjPHrnojB8',
    preview: SabadoNoite2025,
  },
  {
    day: 'Congresso 2025 - Domingo - Manhã',
    link: 'https://photos.app.goo.gl/FhrR68EhQqGrgC2X6',
    preview: DomingoManha2025,
  },
  {
    day: 'Congresso 2025 - Domingo - Noite',
    link: 'https://photos.app.goo.gl/Q7qmdoNSiHyGCgmn6',
    preview: DomingoNoite2025,
  },
  {
    day: 'Congresso 2025 - Segunda - Manhã',
    link: 'https://photos.app.goo.gl/qLryXfdHTbKNzvBD8',
    preview: SegundaManha2025,
  },
  {
    day: 'Congresso 2025 - Segunda - Noite',
    link: 'https://photos.app.goo.gl/mRmEwB6yhy6KVtwm6',
    preview: SegundaNoite2025,
  },
  {
    day: 'Congresso 2025 - Terça - Manhã',
    link: 'https://photos.app.goo.gl/FqXJVMJCXcvJHvwB9',
    preview: TercaManha2025,
  },
  {
    day: 'Congresso 2025 - Terça - Noite',
    link: 'https://photos.app.goo.gl/kz8dD3sBu83npPsh8',
    preview: TercaNoite2025,
  },
  {
    day: 'Aniversário Pastor Fábio - 2024',
    link: 'https://photos.app.goo.gl/1gB5PNTkkc41MbrW8',
    preview: NiverFabio,
  },
  {
    day: 'Esquenta - 2024',
    link: 'https://photos.app.goo.gl/izWr3eVm19KcAkvL9',
    preview: Esquenta2024,
  },
  {
    day: 'Meninas de Fé - 2024',
    link: 'https://photos.app.goo.gl/QFt3jp9HQJPupAMq7',
    preview: Meninasdefe2024,
  },
  {
    day: 'Congresso Faina - 2024',
    link: 'https://photos.app.goo.gl/c3bN6XPTH9TaLajCA',
    preview: Faina2024,
  },
  {
    day: 'Congresso 2024 - Sábado - Noite',
    link: 'https://photos.app.goo.gl/RWtUFMcq3sTkWV4o6',
    preview: SabadoNoite2024,
  },
  {
    day: 'Congresso 2024 - Domingo - Manhã',
    link: 'https://photos.app.goo.gl/9kbXsXg54VidQPoG7',
    preview: DomingoManha2024,
  },
  {
    day: 'Congresso 2024 - Domingo - Noite',
    link: 'https://photos.app.goo.gl/tRpkUzQvevosJk7e6',
    preview: DomingoNoite2024,
  },
  {
    day: 'Congresso 2024 - Segunda - Noite',
    link: 'https://photos.app.goo.gl/mRmEwB6yhy6KVtwm6',
    preview: SegundaNoite2024,
  },
  {
    day: 'Congresso 2024 - Terça - Manhã',
    link: 'https://photos.app.goo.gl/d2KqbwSYuUrZB9Cg9',
    preview: TercaManha2024,
  },
  {
    day: 'Congresso 2024 - Terça - Noite',
    link: 'https://photos.app.goo.gl/ZFeVpTXJs6ggerFo6',
    preview: TercaNoite2024,
  },
  {
    day: 'Clama - 2024',
    link: 'https://photos.app.goo.gl/g5C9y3Vb9BiKJ1eFA',
    preview: Clama2024,
  },
  {
    day: 'Consagração - 2024',
    link: 'https://photos.app.goo.gl/1rXRd77zbKLJWWqs8',
    preview: Consagracao2024,
  },
  {
    day: 'Vigília - 2024',
    link: 'https://photos.app.goo.gl/aQAfgkwKxAMGsLrJ7',
    preview: Vigilia2024,
  },
  {
    day: 'Congresso 2023',
    link: 'https://photos.app.goo.gl/SomMJv6GLrXNFbsT8',
    preview: Congresso2023,
  },
];
export default photoLinks;
