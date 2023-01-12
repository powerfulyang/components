import { css } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Components } from './pages/components';
import { Github } from './pages/github-profile';

const Charts = lazy(() => import('./pages/charts'));

const App = () => {
  return (
    <div
      css={css`
        display: flex;
        background-image: url('/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        padding: 2rem;
      `}
    >
      <Suspense fallback="Loading...">
        <Routes>
          <Route index element={<Navigate replace to="/components" />} />
          <Route path="/components/*" element={<Components />} />
          <Route path="/github/*" element={<Github />} />
          <Route path="/charts/*" element={<Charts />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
