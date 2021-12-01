import type { FC } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

export const PortalWrap: FC = ({ children }) => <>{createPortal(children, document.body)}</>;
