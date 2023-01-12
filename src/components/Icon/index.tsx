import type { FC } from 'react';
import React, { memo } from 'react';
import { css } from '@emotion/react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: string;
}

const BaseIcon: FC<IconProps> = ({ type, ...restProps }) => (
  <svg
    css={css`
      width: 1em;
      height: 1em;
      overflow: hidden;
      fill: currentColor;
      vertical-align: -0.15em;
    `}
    {...restProps}
  >
    <use xlinkHref={`#${type}`} />
  </svg>
);

BaseIcon.displayName = 'Icon';

export const Icon = memo(BaseIcon);
