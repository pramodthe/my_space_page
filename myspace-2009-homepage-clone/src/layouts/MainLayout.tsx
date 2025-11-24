import React from 'react';
import Header from '../components/shared/Header';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="max-w-[980px] mx-auto bg-white shadow-lg">
        <main className="p-2.5">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
