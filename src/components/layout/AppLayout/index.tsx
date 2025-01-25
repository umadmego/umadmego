import React from "react";
import Footer from "../Footer";
import MobileDownloadBar from "../MobileDownloadBar";
import Navbar from "../Navbar";
import DirectionSection from "@/components/homepage/DirectionSection";
import SubscribeSection from "@/components/homepage/SubscribeSection";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFF5F2]">{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;
