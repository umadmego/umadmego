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
                Com uma contribuição mensal no valor de R$30,00, você se torna parte ativa do que Deus está fazendo na nossa geração!
            </motion.p>

            <div className="max-w-4xl mx-auto flex flex-col gap-6 text-justify text-lg leading-relaxed">
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.4}}
                >
                    Seu apoio ajuda a custear pregadores, cantores, alimentação gratuita para todos os participantes e a
                    estrutura necessária para impactar vidas e promover valores que transformam nossa sociedade.
                </motion.p>
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.8}}
                >
                    Sua participação fortalece um movimento que tem transformado vidas, levando a mensagem de Cristo a
                    milhares de jovens. Através dos recursos arrecadados, conseguimos proporcionar uma experiência única
                    de louvor, aprendizado e comunhão.
                </motion.p>
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 1.0}}
                >
                    Ao se tornar um associado, você passa a fazer parte de uma rede de pessoas comprometidas com o Reino
                    de Deus, recebendo conteúdos exclusivos, atualizações sobre os eventos e oportunidades especiais
                    dentro do projeto.
                </motion.p>
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.6}}
                >
                    🎁 <strong>Benefícios para associados:</strong> ao completar <strong>9 contribuições mensais até
                    fevereiro de 2026</strong>, você garante a <strong>camiseta oficial do congresso</strong> e
                    um <strong>presente surpresa</strong> no Congresso de 2026!
                </motion.p>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 1.2}}
                    className="mt-8"
                >
                    <h3 className="text-xl font-bold mb-3">🧾 Tipos de Pagamento</h3>

                    <p className="mb-4">
                        Você pode escolher entre duas formas de contribuição como associado +UMADMEGO:
                    </p>

                    <h4 className="text-lg font-semibold">💳 Pagamento Recorrente (Cartão de Crédito)</h4>
                    <p className="mb-4">
                        Ao escolher o pagamento recorrente, a contribuição de <strong>R$30,00</strong> será cobrada
                        <strong> automaticamente no seu cartão de crédito</strong> todos os meses, durante <strong>9
                        meses</strong>,
                        até o <strong>mês do Congresso 2026</strong>. Essa é a opção mais prática: você faz apenas uma
                        vez a adesão
                        e não precisa se preocupar em lembrar de pagar todos os meses.
                    </p>

                    <div className="text-center mb-6">
                        <a
                            href='http://pag.ae/7_CYHNQwa'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-primary text-white font-bold py-3 px-6 rounded-lg inline-block hover:bg-opacity-80 transition'
                        >
                            Fazer Pagamento Recorrente
                        </a>
                    </div>

                    <h4 className="text-lg font-semibold">💸 Pagamento Avulso (PIX, Cartão ou Débito)</h4>
                    <p className="mb-4">
                        Se preferir, você pode contribuir mensalmente através do pagamento avulso. Nesse caso, será
                        necessário <strong>acessar o link todos os meses</strong> e realizar o pagamento manualmente até
                        fevereiro de 2026,
                        escolhendo a forma que preferir: <strong>PIX</strong>, <strong>crédito à
                        vista</strong> ou <strong>débito</strong>.
                    </p>

                    <div className="text-center">
                        <a
                            href='https://lojaumadmego.lojavirtuolpro.com/associados/c'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-primary text-white font-bold py-3 px-6 rounded-lg inline-block hover:bg-opacity-80 transition'
                        >
                            Fazer Pagamento Avulso
                        </a>
                    </div>
                    <br/>
                    <br/>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnerSection;
