'use server'

import EventSection from "@/components/homepage/EventSection";
import HeroSection from "@/components/homepage/HeroSection";

import AppLayout from "@/components/layout/AppLayout";
import StoreSection from "@/components/homepage/StoreSection";

export default function Home() {
    'use cache'

    return (
        <AppLayout>
            <HeroSection/>
            <StoreSection/>
            <EventSection/>
        </AppLayout>
    );
}
