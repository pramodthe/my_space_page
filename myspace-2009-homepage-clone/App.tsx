import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainBanner from './components/MainBanner';
import TodayOnMySpace from './components/TodayOnMySpace';
import LoginPanel from './components/LoginPanel';
import NewToMySpace from './components/NewToMySpace';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ProfilePage from './components/ProfilePage';
import EditProfilePage from './components/EditProfilePage';
import AccountSettingsPage from './components/AccountSettingsPage';
import EditYourLinksPage from './components/EditYourLinksPage';
import ViewProfilePage from './components/ViewProfilePage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        // Check if it's a hash link for our simple router
        if (href && href.startsWith('#')) {
          e.preventDefault();
          // Manually update the hash. This will trigger the 'hashchange' event.
          if (window.location.hash !== href) {
            window.location.hash = href;
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);
    
    // Set initial route
    if (window.location.hash === '') {
      window.location.hash = '#';
    }
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/settings')) {
      return <AccountSettingsPage />;
    }
    if (route.startsWith('#/profile/edit')) {
      return <EditProfilePage />;
    }
    if (route.startsWith('#/profile/links')) {
      return <EditYourLinksPage />;
    }
    if (route.startsWith('#/view-profile')) {
      return <ViewProfilePage />;
    }
    if (route.startsWith('#/profile')) {
      return <ProfilePage />;
    }
    
    // Only render the homepage if there is no hash or it's just '#'
    if (route === '' || route === '#') {
      return (
        <>
          <MainBanner />
          <div className="mt-2.5 flex flex-col lg:flex-row gap-2.5">
            <div className="flex-grow lg:w-2/3 flex flex-col gap-2.5">
              <TodayOnMySpace />
              <NewToMySpace />
            </div>
            <div className="flex-shrink-0 lg:w-1/3">
              <LoginPanel />
            </div>
          </div>
        </>
      );
    }
    // For any other hash, show the NotFound page
    return <NotFound />;
  };

  return (
    <div className="font-sans text-xs text-gray-800">
      <Header />
      <Navigation />
      <div className="max-w-[980px] mx-auto bg-white shadow-lg">
        <main className="p-2.5">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
