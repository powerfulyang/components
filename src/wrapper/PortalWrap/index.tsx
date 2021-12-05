import { usePortal } from '@powerfulyang/hooks';
import type { FC } from 'react';
import React from 'react';

export const PortalWrap: FC = ({ children }) => {
  const { Portal } = usePortal();
  return <Portal>{children}</Portal>;
};
