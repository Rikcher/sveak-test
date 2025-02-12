import { SkeletonTheme } from 'react-loading-skeleton';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';

import './AppLayout.scss';

const AppLayout = () => {
  return (
    <div className="layout">
      <SkeletonTheme>
        <div className="layout__wrapper">
          <Sidebar />
          <div className="layout__content">
            <Header />
            <main className="layout__main">
              <Outlet />
            </main>
          </div>
        </div>
        <Footer />
      </SkeletonTheme>
    </div>
  );
};

export default AppLayout;
