import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@/entities/theme';
import { AppLayout } from '@/app/layouts';
import { Fallback } from '@/shared/ui/fallback';
import { HomePage } from '@/pages/home';
import { PicturesPage } from '@/pages/picures';

import '../styles/index.scss';

const AppRouter = () => {
  const { theme } = useTheme();

  const routers = createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Fallback />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/pictures" element={<PicturesPage />} />
    </Route>
  );

  const router = createBrowserRouter(routers, {});

  return (
    <div className={clsx('app', theme)}>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
