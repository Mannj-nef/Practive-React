import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '~/layouts/';

const Home = lazy(() => import('~/pages/Home'));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <Home></Home> }]
  }
]);

export default router;
