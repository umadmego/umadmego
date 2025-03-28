import React from 'react';
import { motion } from 'framer-motion';

const HistorySection = () => {
    return (
        <section id="about" className="px-primary mt-24">
            <motion.h2
                className="font-bold text-xl md:text-2xl text-center mb-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                SOBRE NÓS
            </motion.h2>

            <motion.p
                className="text-center font-bold text-primary text-2xl md:text-3xl lg:text-4xl mb-10 font-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                UMADMEGO - União de Mocidade das Assembleias de Deus Missão em Goiás
            </motion.p>

            <div className="max-w-4xl mx-auto flex flex-col gap-6 text-justify text-lg leading-relaxed">
                <p>
                    <span className="text-primary font-semibold">"Ele vem!"</span> – Um clamor que ressoa nos corações dos jovens que se preparam para um grande movimento de fé, avivamento e transformação.
                    <br />A <span className="font-semibold">UMADMEGO 2k25</span> vai além de um congresso: é um chamado urgente para os jovens de Goiás se posicionarem como verdadeiros agentes de mudança, levando o Reino de Deus a cada canto da sua geração.
                </p>

                <p>
                    Ao longo de mais de <span className="font-semibold text-primary">duas décadas</span>, a UMADMEGO tem sido um canal de bênçãos para a juventude cristã, promovendo transformação espiritual e crescimento pessoal.
                    <br />Nosso <span className="font-semibold">Congresso Geral</span> é o ponto alto do ano, reunindo milhares de jovens em um evento repleto de louvor, ensino e experiências impactantes.
                </p>

                <p>
                    Durante o congresso, compartilhamos mensagens edificantes, louvores inspiradores e testemunhos que transformam vidas.
                </p>

                <p>
                    <span className="font-semibold text-primary">Convidamos você</span> a se juntar a nós, seja presencialmente ou online, para viver momentos únicos de comunhão e fortalecimento espiritual.
                    <br />Inscreva-se no nosso canal e compartilhe os conteúdos com seus amigos e familiares para que mais vidas sejam tocadas pela graça de Deus.
                </p>

                <div className="text-center">
                    <a
                        href="https://instagram.com/umadmego"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                    >
                        Acompanhe no Instagram
                    </a>
                    <br/>
                    <br/>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
