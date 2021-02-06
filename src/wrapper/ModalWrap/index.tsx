import React, { FC } from 'react';
import { useEffectOnce, usePortal } from '@powerfulyang/hooks';
import { __dev__ } from '@powerfulyang/utils';

type ModalWrapProps = {};

const ModalWrap: FC<ModalWrapProps> = ({ children }) => {
  const { target, Portal } = usePortal();
  useEffectOnce(() => {
    const t = target as HTMLElement;
    const prevOverflow = t.style.overflow;
    t.style.overflow = 'hidden';
    return () => {
      t.style.overflow = prevOverflow;
    };
  });
  return <Portal>{children}</Portal>;
};

if (__dev__) {
  ModalWrap.displayName = 'ModalWrap';
}

export default ModalWrap;
