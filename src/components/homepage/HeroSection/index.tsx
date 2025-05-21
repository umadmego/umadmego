'use server'

import {useAppSelector} from "@/store/hooks";
import React from "react";
import IntroSection from "./IntroSection";
import GallerySection from "@/components/homepage/HeroSection/GallerySection";

function HeroSection() {
    'use cache'

    const {open: mobileBarOpen} = useAppSelector((state) => state.mobileBar);

    return (
        <header
            className={`h-full ${
                mobileBarOpen
                    ? "lg:h-[calc(100vh-96px-48px)]"
                    : "lg:h-[calc(100vh-96px)]"
            }`}
            style={{
                backgroundImage: `url(/fundo-tela-inicial-full.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex justify-between h-full overflow-hidden lg:flex-row flex-col-reverse items-center">
                <div className="hidden lg:block">
                    <IntroSection/>
                </div>
                <GallerySection/>
            </div>
            <div className="lg:hidden flex justify-center mt-4">
                <IntroSection/>
            </div>
        </header>
    );
}

export default HeroSection;
