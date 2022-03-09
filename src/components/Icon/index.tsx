import type { FC } from 'react';
import React, { memo } from 'react';
import classNames from 'classnames';
import './index.scss';
import { isClient } from '@powerfulyang/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: string;
}

if (isClient) {
  const scriptElem = document.createElement('script');
  scriptElem.src = '//at.alicdn.com/t/font_178634_7m8rip6osz4.js';
  document.body.appendChild(scriptElem);
}

export const Icon: FC<IconProps> = memo(({ className, type, ...restProps }) => (
  <svg className={classNames(className, 'py-super-icon')} {...restProps}>
    <use xlinkHref={`#${type}`} />
  </svg>
));

Icon.displayName = 'Icon';
