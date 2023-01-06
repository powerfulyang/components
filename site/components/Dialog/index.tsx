import { Button, notification, Modal, Drawer } from '@/components';
import React from 'react';

export const DialogComponents = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  return (
    <div>
      <div className="space-x-2">
        <Button
          onClick={() => {
            setModalVisible(true);
          }}
          appearance="primary"
        >
          弹出 Modal
        </Button>
        <Button
          onClick={() => {
            setDrawerVisible(true);
          }}
          appearance="primary"
        >
          弹出 Drawer
        </Button>
      </div>
      <Modal
        title="标题"
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        onOk={() => {
          setModalVisible(false);
          notification.success({
            message: '点击成功',
          });
        }}
        overlayClosable={false}
      >
        sdkasldas
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={() => {
          setDrawerVisible(false);
        }}
      >
        123
      </Drawer>
    </div>
  );
};
