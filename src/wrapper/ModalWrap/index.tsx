import type { FC } from 'react';
import React, { useEffect } from 'react';
import { usePortal } from '@powerfulyang/hooks';
import { isDevProcess } from '@powerfulyang/utils';

type ModalWrapProps = {};

const ModalWrap: FC<ModalWrapProps> = ({ children }) => {
  const { target, Portal } = usePortal();
  useEffect(() => {
    const t = target as HTMLElement;
    const prevOverflow = t.style.overflow;
    t.style.overflow = 'hidden';
    return () => {
      t.style.overflow = prevOverflow;
    };
  }, [target]);
  return <Portal>{children}</Portal>;
};

if (isDevProcess) {
  ModalWrap.displayName = 'ModalWrap';
}

export default ModalWrap;
