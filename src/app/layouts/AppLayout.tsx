import { SkeletonTheme } from 'react-loading-skeleton';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import './appLayout.scss';

const AppLayout = () => {
  return (
    <div className="layout layout__wrapper">
      <SkeletonTheme>
        <Header />
        <main className="layout__content">
          <Outlet />
        </main>
        <Footer />
      </SkeletonTheme>
    </div>
  );
};

export default AppLayout;
