import type { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = PropsWithChildren<{
  container?: HTMLElement | null;
}>;

export const Portal: FC<PortalProps> = (props) => {
  const { container = globalThis?.document?.body, children } = props;
  return container ? createPortal(children, container) : null;
};

Portal.displayName = 'Portal';
