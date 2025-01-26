import React from 'react';

const HistorySection = () => {
    return (
        <section id='about' className='px-primary mt-[107px]'>
            <h2 className='font-bold text-xl md:text-2xl text-center mb-5'>SOBRE NÓS</h2>
            <p className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-10 font-secondary'>
                UMADMEGO - União de Mocidade das Assembleias de Deus Missão em Goiás
            </p>
            <div className='flex flex-col gap-5 md:text-lg w-full'>
                <p>
                    "Ele vem!" – um clamor que ressoa nos corações dos jovens que estão se preparando para um grande movimento de fé, avivamento e transformação.
                    <br/>A UMADMEGO 2k25 vai além de um congresso: é um chamado urgente para os jovens de Goiás se posicionarem como verdadeiros agentes de mudança, levando o Reino de Deus a cada canto da sua geração.
                </p>
                <p>
                    Ao longo de mais de duas décadas, a UMADMEGO tem sido um canal de bênçãos para a juventude cristã, promovendo transformação espiritual e crescimento pessoal. Nosso Congresso Geral é o ponto alto do ano, reunindo milhares de jovens em um evento repleto de louvor, ensino e experiências impactantes.
                </p>
                <p>
                    Através do congresso, compartilhamos mensagens edificantes, louvores inspiradores e testemunhos que transformam vidas.
                </p>
                <p>
                    Convidamos você a se juntar a nós, seja presencialmente ou online, para viver momentos únicos de comunhão e fortalecimento espiritual.
                    <br/>Inscreva-se no nosso canal e compartilhe os conteúdos com seus amigos e familiares para que mais vidas sejam tocadas pela graça de Deus.
                </p>
                <p>
                    Todas as informações sobre os ensaios e o congresso estão disponíveis no nosso Instagram oficial: <a href='https://instagram.com/umadmego' target='_blank' rel='noopener noreferrer' className='text-primary font-bold'>instagram.com/umadmego</a>.
                </p>
                <br/>
                <br/>
            </div>
        </section>
    );
};

export default HistorySection;
