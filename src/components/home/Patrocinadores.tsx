import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Botao from '@/components/ui/Botao';
import { Container, TituloSecao } from '@/components/ui/Secao';
import { edicao } from '@/content/edicao';

/** Logos dos patrocinadores da edição atual e a chamada para novas marcas. */
function Patrocinadores() {
  const { patrocinio } = edicao;
  if (!patrocinio) return null;

  return (
    <section id='patrocinadores'>
      <Container className='flex flex-col gap-8 py-12 sm:gap-10 sm:py-24'>
        <div className='flex flex-col gap-4'>
          <TituloSecao rotulo={`Patrocinadores · ${edicao.ano}`} titulo='Quem apoia o congresso' />
          <p className='max-w-2xl text-lg leading-relaxed text-grafite'>
            Marcas que acreditam na juventude e ajudam a fazer o Congresso UMADMEGO {edicao.ano} acontecer. Obrigado!
          </p>
        </div>

        <ul className='grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4'>
          {patrocinio.patrocinadores.map((patrocinador) => {
            const logo = (
              <Image
                src={patrocinador.logo}
                alt={patrocinador.nome}
                sizes='(min-width: 1024px) 300px, 50vw'
                className={`size-full ${patrocinador.preencher ? 'object-cover' : 'object-contain p-5 sm:p-8'}`}
              />
            );
            return (
              <li key={patrocinador.nome} className='aspect-[16/10] overflow-hidden border border-linha bg-white'>
                {patrocinador.link ? (
                  <a href={patrocinador.link} target='_blank' rel='noopener noreferrer' className='block size-full hover:opacity-85'>
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </li>
            );
          })}
          <li className='aspect-[16/10]'>
            <a
              href='#seja-patrocinador'
              className='flex size-full flex-col items-center justify-center gap-1 border-2 border-dashed border-cinza p-4 text-center text-pedra hover:border-tinta hover:text-tinta'
            >
              <span className='titulo text-[24px] sm:text-[32px]'>Sua marca aqui</span>
              <span className='rotulo'>Seja um patrocinador</span>
            </a>
          </li>
        </ul>

        <div id='seja-patrocinador' className='flex scroll-mt-24 flex-wrap items-center gap-8 bg-tinta p-6 text-papel sm:gap-12 sm:p-10'>
          <div className='flex min-w-0 flex-[1_1_320px] flex-col gap-4'>
            <p className='rotulo flex items-center gap-2 text-cinza'>
              <span className='block size-2 bg-edicao' />
              Seja um patrocinador
            </p>
            <h3 className='titulo text-[40px] sm:text-[56px]'>Sua marca no congresso</h3>
            <div className='flex flex-wrap gap-3 pt-2'>
              {patrocinio.contatos.map((contato, indice) => (
                <Botao key={contato.link} href={contato.link} variante={indice === 0 ? 'edicao' : 'contorno-claro'}>
                  <FaWhatsapp size={20} aria-hidden='true' />
                  {contato.rotulo}
                </Botao>
              ))}
            </div>
          </div>
          <ul className='flex min-w-0 flex-[1_1_320px] flex-col border-t border-grafite'>
            {patrocinio.beneficios.map((beneficio) => (
              <li key={beneficio} className='flex items-start gap-3 border-b border-grafite py-4 text-lg leading-snug text-linha'>
                <span aria-hidden='true' className='mt-1.5 block size-0 shrink-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-edicao' />
                {beneficio}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Patrocinadores;
