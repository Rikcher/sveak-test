import { AppLayout } from '@/app/layouts';
import { HomePage } from '@/pages/home';
import {
  createHashRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { useTheme } from '@/entities/theme';
import clsx from 'clsx';
import { Fallback } from '@/shared/ui/fallback';

import '../styles/index.scss';

const AppRouter = () => {
  const { theme } = useTheme();

  const routers = createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout />}
      handle={{ crumb: <Link to="/">Home</Link> }}
      errorElement={<Fallback />}
    >
      <Route index element={<HomePage />} />
    </Route>
  );

  const router = createHashRouter(routers, {});

  return (
    <div className={clsx('app', theme)}>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
