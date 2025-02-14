import { SkeletonTheme } from 'react-loading-skeleton';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { BurgerMenu, useMobile } from '@/features/mobile-toggle';

import './AppLayout.scss';
import clsx from 'clsx';

const AppLayout = () => {
  const { isOpen } = useMobile();

  return (
    <div className={clsx('layout', isOpen && 'no-doc-scroll')}>
      <SkeletonTheme>
        <div className="layout__wrapper">
          <Sidebar />
          <div className="layout__content">
            <BurgerMenu />
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
