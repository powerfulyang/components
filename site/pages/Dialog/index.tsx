import { Button } from '@/components';
import React from 'react';
import { Modal } from '@/components/Modal';

export const DialogComponents = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        弹出 Modal
      </Button>
      <Modal
        title="标题"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        sdkasldas
      </Modal>
    </div>
  );
};
