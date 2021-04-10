import React, { FC } from 'react';
import { forwardRef } from '@/utils/forwardRef';
import { Icon } from '..';

type Props = {};

export const ShowQrCode: FC<Props> = forwardRef(({ children, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      <Icon pointer type="icon-ico" />
      {children}
    </div>
  );
});

ShowQrCode.displayName = 'ShowQrCode';
