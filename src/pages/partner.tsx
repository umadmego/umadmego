import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import PartnerHeader from "@/components/partnerPage/PartnerHeader";
import ParterSection from "@/components/partnerPage/PartnerSection";

function Partner() {
  return (
    <AppLayout>
      <PartnerHeader />
      <ParterSection />
    </AppLayout>
  );
}

export default Partner;
