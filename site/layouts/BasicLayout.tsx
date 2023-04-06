import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@site/components/Header';

export const BasicLayout = () => {
  return (
    <div
      css={css`
        display: flex;
        background-image: url('/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
      `}
    >
      <div
        css={css`
          background-color: var(--theme-bg-color);
          backdrop-filter: blur(20px);
          max-width: 1400px;
          margin: auto;
          width: 90%;
          border-radius: 10px;
          height: 90%;
        `}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
