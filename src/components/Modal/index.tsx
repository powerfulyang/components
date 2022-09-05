import type { DialogProps } from '@/components';
import { Button, Dialog, Icon } from '@/components';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import './index.scss';

export type ModalProps = {
  title?: string;
} & DialogProps;

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, title, ...props }) => {
  return (
    <Dialog {...props}>
      <div className="py-modal-container px-8 py-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xl font-medium">{title}</div>
          <Icon className="cursor-pointer text-2xl" type="icon-close" onClick={props.onClose} />
        </div>
        {children}
        <div className="mt-4 flex items-center justify-end space-x-2">
          <Button appearance="ghost" className="text-black" onClick={props.onClose}>
            取消
          </Button>
          <Button appearance="primary">确认</Button>
        </div>
      </div>
    </Dialog>
  );
};
