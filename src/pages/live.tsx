import YouTubePlaylists from '@/components/livePage/YouTubePlaylists';
import Header from '@/components/livePage/Header';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

function Live() {
  return (
    <AppLayout>
      <Header title="Transmissões Ao Vivo" />
      <YouTubePlaylists />
    </AppLayout>
  );
}

export default Live;
