import React from 'react';
import { Dialog } from '@/components/Dialog';
import { Button } from '@/components/Button';
import { notification, Skeleton } from '@/components';
import './app.scss';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="app">
      <Button type="button" onClick={() => setVisible(true)}>
        Hello, world!
      </Button>
      <Dialog
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div className="bg-white max-w-[700px] m-auto rounded-lg p-4 text-gray-600 text-lg">
          Your payment has been successfully submitted. We’ve sent you an email with all of the
          details of your order.
        </div>
      </Dialog>
      <Skeleton />
      <Button
        onClick={() => {
          notification.success({
            description: 'This is a success notification',
            message: 'Successful',
          });
        }}
      >
        Success Notification
      </Button>
    </div>
  );
};

export default App;
