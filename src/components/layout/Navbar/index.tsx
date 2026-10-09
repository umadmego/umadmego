import React from "react";
import Logo from "@/assets/brand/logo-white-2026.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <nav className="bg-primary text-light pl-primary pr-primary h-24">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="UMADMEGO"
            className="h-[90px] w-auto p-2"
          />
        </Link>
        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <div className="lg:hidden block">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
