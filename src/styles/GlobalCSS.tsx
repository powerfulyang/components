import { css, Global } from '@emotion/react';

const globalCSS = css`
  :root {
    --py-tooltip-bg-color: rgba(0 0 0 / 65%);
    --py-tooltip-z-index: 1000;
    --py-notification-z-index: 1000;

    // checkbox radio bg color
    --checkbox-radio-bg-color: rgba(33 16 118);
    --checkbox-radio-bg-color-hover: rgba(33 16 118 / 50%);
    --tooltip-bg-color: rgba(43 41 41 / 92%);

    //
    --theme-bg-color: rgba(16 18 27 / 40%);
    --border-color: rgba(113 119 144 / 25%);
    --theme-color: #f9fafb;
    --inactive-color: rgba(113 119 144 / 78%);
    --hover-menu-bg: rgba(12 15 25 / 15%);
    --focus-menu-bg: rgba(16 18 27 / 25%);
    --active-menu-bg: rgba(16 18 27 / 40%);
    --content-title-color: #999ba5;
    --content-bg: rgba(146 151 179 / 13%);
    --button-inactive: rgba(249 250 251 / 55%);
    --dropdown-bg: #21242d;
    --dropdown-hover: rgba(42 46 60);
    --popup-bg: rgba(22 25 37);
    --search-bg: #14162b;
    --overlay-bg: rgba(36 39 59 / 30%);
    --scrollbar-bg: rgba(1 2 3 / 40%);

    #py-notification-collection {
      position: fixed;
      right: 2rem;
      top: 2rem;
      z-index: var(--py-notification-z-index);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export const GlobalCSS = () => {
  return <Global styles={globalCSS} />;
};
