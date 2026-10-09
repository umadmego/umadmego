import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import AppLayout from '@/components/layout/AppLayout';
import { redes } from '@/components/ui/Redes';
import { CabecalhoPagina, Container } from '@/components/ui/Secao';
import { site } from '@/content/site';

const ContactPage = () => {
  return (
    <AppLayout title='Contato'>
      <CabecalhoPagina rotulo='Fale conosco' titulo='Contato'>
        <p className='max-w-2xl text-lg leading-relaxed text-linha'>
          Será um prazer conhecer você. Fale com a gente ou siga a {site.nome} nas redes.
        </p>
      </CabecalhoPagina>

      <section>
        <Container className='grid gap-10 py-12 sm:py-20 lg:grid-cols-2'>
          <div className='flex flex-col gap-4'>
            <p className='rotulo text-pedra'>Endereço e e-mail</p>
            <ul className='border-t-2 border-tinta'>
              <li className='flex items-start gap-4 border-b border-linha py-5'>
                <FiMapPin size={20} aria-hidden='true' className='mt-1 shrink-0' />
                <span className='text-lg'>{site.endereco}</span>
              </li>
              <li className='border-b border-linha'>
                <a href={`mailto:${site.email}`} className='flex items-center gap-4 py-5 text-lg hover:opacity-80'>
                  <FiMail size={20} aria-hidden='true' className='shrink-0' />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='rotulo text-pedra'>Redes sociais</p>
            <ul className='border-t-2 border-tinta'>
              {redes.map(({ nome, href, Icone }) => (
                <li key={nome} className='border-b border-linha'>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-between gap-4 py-5 text-lg hover:opacity-80'
                  >
                    <span className='flex items-center gap-4'>
                      <Icone size={20} aria-hidden='true' />
                      {nome}
                    </span>
                    <span aria-hidden='true'>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </AppLayout>
  );
};

export default ContactPage;
