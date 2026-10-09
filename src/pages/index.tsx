import AppLayout from '@/components/layout/AppLayout';
import ChamadaInstagram from '@/components/home/ChamadaInstagram';
import Destaques from '@/components/home/Destaques';
import Edicoes from '@/components/home/Edicoes';
import FaixaEdicao from '@/components/home/FaixaEdicao';
import Hero from '@/components/home/Hero';
import Loja from '@/components/home/Loja';
import Tema from '@/components/home/Tema';

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <FaixaEdicao />
      <Tema />
      <Loja />
      <Destaques />
      <Edicoes />
      <ChamadaInstagram />
    </AppLayout>
  );
}
