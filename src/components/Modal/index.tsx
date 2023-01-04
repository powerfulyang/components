import type { DialogProps } from '@/components/Dialog';
import { Dialog } from '@/components/Dialog';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import './index.scss';
import { useLatest } from '@powerfulyang/hooks';
import { Button } from '../Button';
import { Icon } from '../Icon';

export type ModalProps = {
  title?: string;
  onOk?: () => void;
} & DialogProps;

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, title, onOk, ...props }) => {
  const handleOk = useLatest(onOk);
  return (
    <Dialog {...props} className="pt-32" mode="modal">
      <div className="py-modal-container px-8 py-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="py-modal-title text-xl">{title}</div>
          <Icon className="cursor-pointer text-2xl" type="icon-close" onClick={props.onClose} />
        </div>
        {children}
        <div className="mt-4 flex items-center justify-end space-x-2">
          <Button appearance="ghost" className="text-black" onClick={props.onClose}>
            取消
          </Button>
          <Button onClick={handleOk.current} appearance="primary">
            确认
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
