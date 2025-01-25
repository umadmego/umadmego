import Button from "@/common/Button";
import React from "react";

function IntroSection() {
  return (
    <div className="pr-primary pl-primary flex flex-col justify-center p-5 h-full lg:flex:[45%] text-center lg:text-left mb-[94px] lg:mb-0">
      <p className="lg:text-[42px] text-light text-2xl font-secondary  mt-[3px]  lg:mb-[2px]">
        Bem vindo!
      </p>
      <h1 className="text-light text-2xl lg:text-[35px] max-w-[547px]  mb-[18px]">
        <span className="font-secondary font-bold lg:text-[55px] text-[40px]">
          UMADMEGO&nbsp;
          <span className="font-secondary text-secondary font-bold lg:text-[55px] text-[40px]">
            2k25
          </span>
        </span>
      </h1>

      <div className="flex items-center flex-wrap lg:gap-10 gap-[22px] justify-center lg:justify-start">
        <a href="https://www.instagram.com/umadmego" target="_blank">
          <Button className="lg:!h-[60px] lg:!w-[241px] h-[35px] lg:!text-lg !font-semibold">
            Acesse o instagram
          </Button>
        </a>
        <a href="https://lojaumadmego.lojavirtuolpro.com/" target="_blank">
          <Button className="lg:!h-[60px] h-[35px] lg:!w-[241px] lg:!text-lg !font-semibold">
            Acessar Loja
          </Button>
        </a>
      </div>
    </div>
  );
}

export default IntroSection;
