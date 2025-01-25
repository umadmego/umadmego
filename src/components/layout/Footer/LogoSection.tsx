import Image from "next/image";
import React from "react";
import WhiteLogo from "@/assets/brand/logo-white.png";

function LogoSection() {
  return (
    <div className="text-white flex-col">
      <Image
        src={WhiteLogo}
        alt="UMADMEGO"
        className="h-[128px] w-auto "
      />
      <p className="font-normal mt-[34px] text-sm">UMADMEGO 2k25 | Ele vem!</p>
      <p className="font-normal mt-[34px] mb-[27px] text-sm">
        "Ele vem!" – um clamor que ressoa nos corações dos jovens que estão se
        preparando para um grande movimento de fé, avivamento e transformação. A
        UMADMEGO 2k25 vai além de um congresso: é um chamado urgente para os
        jovens de Goiás se posicionarem como verdadeiros agentes de mudança,
        levando o Reino de Deus a cada canto da sua geração.
      </p>
      <p className="font-normal mt-[34px] mb-[27px] text-sm">
        • União de Mocidade das Assembleias de Deus Missão no Estado de Goiás<br />
        • Líderes: Pr. Fábio e Ir. Eliete
      </p>
    </div>
  );
}

export default LogoSection;
