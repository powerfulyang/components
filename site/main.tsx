import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NormalizeCSS } from '@/styles/NormalizeCSS';
import { GlobalCSS } from '@/styles/GlobalCSS';
import { css, Global } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { router } from '@site/routes';
import { Toaster } from '@/components/Toaster';

const theme = createTheme();

const appCSS = css`
  html,
  body,
  #root {
    --body-font: 'Poppins', sans-serif;
    font-family: var(--body-font);
    font-size: 14px;
    width: 100%;
    height: 100vh;
  }
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NormalizeCSS />
      <GlobalCSS />
      <Global styles={appCSS} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
);
