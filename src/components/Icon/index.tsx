import type { FC } from 'react';
import React, { memo } from 'react';
import classNames from 'classnames';
import './index.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: string;
}

export const Icon: FC<IconProps> = memo(({ className, type, ...restProps }) => (
  <svg className={classNames(className, 'py-super-icon')} {...restProps}>
    <use xlinkHref={`#${type}`} />
  </svg>
));

Icon.displayName = 'Icon';
