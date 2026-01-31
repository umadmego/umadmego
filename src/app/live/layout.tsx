'use client';
import AppLayout from '@/components/layout/AppLayout';
import { StoreProvider } from '@/store/StoreProvider';
import React from 'react';

export default function LiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <AppLayout>{children}</AppLayout>
    </StoreProvider>
  );
}
