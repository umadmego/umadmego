import React from 'react';
import { edicao } from '@/content/edicao';

/** Faixa com os dados principais da edição atual. */
function FaixaEdicao() {
  const itens = [
    { rotulo: 'Tema', valor: edicao.tema },
    { rotulo: 'Datas', valor: edicao.datas },
    { rotulo: 'Entrada', valor: 'Gratuita' },
    { rotulo: 'Local', valor: edicao.local.nome, detalhe: edicao.local.endereco },
  ];

  return (
    <section aria-label={`Congresso ${edicao.ano}`} className='border-b border-linha'>
      <div className='mx-auto grid w-full max-w-7xl grid-cols-2 px-1 sm:px-2 lg:grid-cols-4'>
        {itens.map((item, indice) => {
          const bordas = [
            'border-r border-b lg:border-b-0',
            'border-b lg:border-b-0 lg:border-r',
            'border-r',
            '',
          ][indice];
          return (
            <div key={item.rotulo} className={`flex flex-col gap-2 border-linha px-3 py-5 sm:px-6 sm:py-8 ${bordas}`}>
              <span className='rotulo text-[11px]! text-pedra sm:text-xs!'>{item.rotulo}</span>
              <span className='text-[17px] font-bold sm:text-[22px]'>{item.valor}</span>
              {item.detalhe && <span className='text-sm text-grafite'>{item.detalhe}</span>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FaixaEdicao;
