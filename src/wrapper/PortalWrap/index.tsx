import { usePortal } from '@powerfulyang/hooks';
import React, { FC } from 'react';

export const PortalWrap: FC = ({ children }) => {
  const { Portal } = usePortal();
  return <Portal>{children}</Portal>;
};
