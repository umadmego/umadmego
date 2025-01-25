import React from 'react';
import CelularImage from '@/assets/images/home/celular-loja.png';
import Image from 'next/image';
import Button from "@/common/Button";

const StoreSection = () => {
    return (
        <section
            id='store'
            className='download-bg flex lg:items-start items-end justify-end flex-wrap lg:flex-nowrap relative'
        >
            <div className='lg:flex-[50%] flex flex-col px-primary lg:py-[162px] py-[100px]'>
                <h2 className='text-white font-secondary text-[40px] lg:text-[55px] font-bold mb-[27px]'>
          <span className='font-normal text-[51px] lg:text-[64px] text-warning font-cursive'>
            Loja Oficial
          </span>{' '}
                    UMADMEGO
                </h2>
                <p className='text-white text-md lg:text-xl font-normal mb-[64px] lg:md-[74px]'>
                    Visite a loja oficial da UMADMEGO e confira nossos produtos exclusivos!
                    <br/> Adquira a camiseta oficial do congresso de 2025 e outros itens personalizados especialmente preparados para
                    você.
                </p>
                <a href="https://lojaumadmego.lojavirtuolpro.com/" target="_blank">
                    <Button className="lg:!h-[60px] h-[35px] lg:!w-[241px] lg:!text-lg !font-semibold">
                        Acessar Loja
                    </Button>
                </a>
            </div>
            <div className='lg:flex-[50%] justify-end hidden self-end xl:flex'>
                <Image src={CelularImage} alt='Loja UMADMEGO'/>
            </div>
        </section>
    );
};
export default StoreSection;
