'use server'

import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function AppLayout({children}: { children: React.ReactNode }) {
    'use cache'

    return (
        <>
            <Navbar/>
            <main className="bg-[#FFF5F2]">{children}</main>
            <Footer/>
        </>
    );
}

export default AppLayout;
