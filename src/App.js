import React from 'react';

import { Header } from 'components/Header';
import { Books } from 'components/Books';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Books />
      <Footer />
    </>
  );
};
