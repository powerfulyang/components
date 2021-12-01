import type { FC } from 'react';
import React, { memo } from 'react';
import classNames from 'classnames';
import './index.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: string;
  pointer?: boolean;
}

export const Icon: FC<IconProps> = memo(({ className, type, pointer, ...restProps }) => (
  <svg
    className={classNames(className, 'super_icon', { super_icon_pointer: pointer })}
    aria-hidden="true"
    {...restProps}
  >
    <use xlinkHref={`#${type}`} />
  </svg>
));

Icon.displayName = 'Icon';
