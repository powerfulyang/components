import { createBrowserRouter } from 'react-router-dom';
import { BasicLayout } from '@site/layouts/BasicLayout';
import Home from '@site/pages/home';
import { Components } from '@site/pages/components';

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
    ],
  },
]);
