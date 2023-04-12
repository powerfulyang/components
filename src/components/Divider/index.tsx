import type { FC } from 'react';
import { css } from '@emotion/react';

interface DividerProps {
  layout?: 'horizontal' | 'vertical';
}

export const Divider: FC<DividerProps> = ({ layout = 'horizontal' }) => {
  if (layout === 'horizontal') {
    return (
      <hr
        css={css`
          display: block;
          width: 100%;
          border: 0;
          height: 1px;
          background-color: #e2e8f0;
          transform: scaleY(0.5);
        `}
      />
    );
  }
  return (
    <div
      css={css`
        display: block;
        width: 1px;
        border: 0;
        height: 100%;
        background-color: #e2e8f0;
        transform: scaleX(0.5);
      `}
    />
  );
};
