import React from 'react';
import { motion } from 'framer-motion';

const PartnerSection = () => {
    return (
        <section id='partner' className='px-primary mt-[107px]'>
            <motion.h2
                className='font-bold text-xl md:text-2xl text-center mb-5'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Seja um Associado +UMADMEGO!
            </motion.h2>

            <motion.p
                className='text-center text-primary font-bold text-[30px] md:text-[35px] lg:text-[40px] mb-10 font-secondary'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Com uma contribuição mensal a partir de R$30,00, você se torna parte ativa do que Deus está fazendo na nossa geração!
            </motion.p>

            <div className="max-w-4xl mx-auto flex flex-col gap-6 text-justify text-lg leading-relaxed">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Seu apoio ajuda a custear pregadores, cantores, alimentação gratuita para todos os participantes e a estrutura necessária para impactar vidas e promover valores que transformam nossa sociedade.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Além disso, como associado, você garante a camiseta do congresso e um presente surpresa no Congresso de 2026! 🎁
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Sua participação fortalece um movimento que tem transformado vidas, levando a mensagem de Cristo a milhares de jovens. Através dos recursos arrecadados, conseguimos proporcionar uma experiência única de louvor, aprendizado e comunhão.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                >
                    Ao se tornar um associado, você passa a fazer parte de uma rede de pessoas comprometidas com o Reino de Deus, recebendo conteúdos exclusivos, atualizações sobre os eventos e oportunidades especiais dentro do projeto.
                </motion.p>

                <div className="text-center mt-6">
                    <motion.a
                        href='https://exemplo.com/inscricao'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-primary text-white font-bold py-3 px-6 rounded-lg inline-block hover:bg-opacity-80 transition'
                        initial={{scale: 0.9}}
                        animate={{scale: 1}}
                        transition={{duration: 0.3, delay: 1.2}}
                    >
                        Inscreva-se agora
                    </motion.a>
                    <br/>
                    <br/>
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
