import LoadingIndicator from "@/common/LoadingIndicator/LoadingIndicator";
import { useAppSelector } from "@/store/hooks";
import dynamic from "next/dynamic";
import React from "react";
import IntroSection from "./IntroSection";

const DynamicGallery = dynamic(() => import("./GallerySection"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center">
      <LoadingIndicator />
    </div>
  ),
});

function HeroSection() {
  const { open: mobileBarOpen } = useAppSelector((state) => state.mobileBar);

  return (
    <header
      className={`h-full ${
        mobileBarOpen
          ? "lg:h-[calc(100vh-96px-48px)]"
          : "lg:h-[calc(100vh-96px)]"
      }`}
      style={{
        backgroundImage: `url(/fundo-tela-inicial-full.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between h-full overflow-hidden lg:flex-row flex-col-reverse items-center">
        <div className="hidden lg:block">
          <IntroSection />
        </div>
        <DynamicGallery />
      </div>
      <div className="lg:hidden flex justify-center mt-4">
        <IntroSection />
      </div>
    </header>
  );
}

export default HeroSection;
