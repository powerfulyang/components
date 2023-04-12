import { Dialog } from '@/components/Dialog';
import { Button } from '@/components/Button';
import { css } from '@emotion/react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { waitFor } from '@powerfulyang/utils';
import { toast } from '@/components/Toaster';
import { Popover } from '@/components/Popover';
import { Divider } from '@/components/Divider';
import { Tab, Tabs } from '@/components/Tabs';

const Home = () => {
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: () => {
      return waitFor(5000);
    },
    onSuccess: () => {
      setOpen(false);
    },
  });

  let i = 0;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const [activeTabKey, setActiveTabKey] = useState<string>();

  return (
    <div
      css={css`
        padding: 20px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      `}
    >
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Button
        appearance="primary"
        onClick={() => {
          i += 1;
          toast.success(`hello world ${i}`);
        }}
      >
        Open Toaster
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero. Aenean
          lacinia bibendum nulla sed consectetur. Donec sed odio dui. Donec ullamcorper nulla non
          metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id
          dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel
          eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            gap: 20px;
          `}
        >
          <Button
            ghost
            appearance="primary"
            css={css`
              color: #0ebeff;
            `}
            onClick={() => setOpen(false)}
            autoFocus
          >
            Cancel
          </Button>
          <Button
            loading={mutation.isLoading}
            onClick={() => {
              mutation.mutate();
            }}
            appearance="primary"
          >{`Yes, I'm sure`}</Button>
        </div>
      </Dialog>
      <Button
        appearance="primary"
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        Open Popover
      </Button>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        Popover Content
      </Popover>
      <Divider />
      <Tabs
        activeTabKey={activeTabKey}
        onChange={(tabKey) => {
          setActiveTabKey(tabKey);
        }}
      >
        <Tab tabKey="1">Tab 1</Tab>
        <Tab tabKey="2">Tab 2</Tab>
        <Tab tabKey="3">Tab 3</Tab>
      </Tabs>
    </div>
  );
};

export default Home;
