import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import ProfilePage from '../pages/profile/ProfilePage';
import EditProfilePage from '../pages/profile/edit/EditProfilePage';
import EditYourLinksPage from '../pages/profile/links/EditYourLinksPage';
import ViewProfilePage from '../pages/profile/view/ViewProfilePage';
import AccountSettingsPage from '../pages/settings/AccountSettingsPage';
import NotFoundPage from '../pages/not-found/NotFoundPage';
import CreateBlogEntryPage from '../pages/blog/CreateBlogEntryPage';
import FriendsPage from '../pages/profile/friends/FriendsPage';
import BlockUserPage from '../pages/profile/block/BlockUserPage';

const Router: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          if (window.location.hash !== href) {
            window.location.hash = href;
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);
    
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
    if (route.startsWith('#/blog/new')) {
      return <CreateBlogEntryPage />;
    }
    if (route.startsWith('#/settings')) {
      return <AccountSettingsPage />;
    }
    if (route.startsWith('#/profile/edit')) {
      return <EditProfilePage />;
    }
    if (route.startsWith('#/profile/links')) {
      return <EditYourLinksPage />;
    }
     if (route.startsWith('#/profile/friends')) {
      return <FriendsPage />;
    }
    if (route.startsWith('#/profile/block')) {
      return <BlockUserPage />;
    }
    if (route.startsWith('#/view-profile')) {
      return <ViewProfilePage />;
    }
    if (route.startsWith('#/profile')) {
      return <ProfilePage />;
    }
    
    if (route === '' || route === '#') {
      return <HomePage />;
    }
    
    return <NotFoundPage />;
  };

  return (
    <MainLayout>
        {renderPage()}
    </MainLayout>
  );
};

export default Router;