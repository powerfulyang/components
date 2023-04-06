import { createBrowserRouter } from 'react-router-dom';
import { BasicLayout } from '@site/layouts/BasicLayout';
import Home from '@site/pages/home';
import { Components } from '@site/pages/components';
import { GithubProfile } from '@/components';
import Charts from '@site/pages/charts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/components/*',
        element: <Components />,
      },
      {
        path: '/projects',
        element: <GithubProfile />,
      },
      {
        path: '/charts',
        element: <Charts />,
      },
    ],
  },
]);
