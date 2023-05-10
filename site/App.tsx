import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { css, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from '@site/routes';
import { Toaster } from 'react-hot-toast';

const theme = createTheme();

const appCSS = css`
  :root {
    //
    --theme-bg-color: rgba(16 18 27 / 40%);
    --border-color: rgba(113 119 144 / 25%);
    --inactive-color: rgba(113 119 144 / 78%);
  }

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

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Global styles={appCSS} />
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
