import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = PropsWithChildren<{
  container?: HTMLElement | null;
}>;

export const Portal = forwardRef<HTMLDivElement, PortalProps>(
  (props: PortalProps, forwardedRef) => {
    const { container = globalThis?.document?.body, ...portalProps } = props;
    return container ? createPortal(<div {...portalProps} ref={forwardedRef} />, container) : null;
  },
);

Portal.displayName = 'Portal';
