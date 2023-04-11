import colors from '@/colors';
import { useTheme as emotionUseTheme } from '@emotion/react';

export const theme = {
  colors: {
    ...colors,
    primary: colors.violet['500'],
    secondary: colors.gray['400'],
    error: colors.red['500'],
    warning: colors.orange['400'],
    default: colors.transparent,
    info: colors.blue['400'],
    success: colors.green['400'],
    disabled: colors.gray['400'],
    rippleColor: 'rgb(0 0 0 / 8%)',
  },
};

type TTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends TTheme {}
}

export const useTheme = () => {
  const contextTheme = emotionUseTheme();
  return contextTheme ?? theme;
};
