import React, { FC } from 'react';
import { Icon } from '..';

type Props = {};

export const ShowQrCode: FC<Props> = ({ children }) => {
  return (
    <>
      <Icon pointer type="icon-ico" />
      {children}
    </>
  );
};
