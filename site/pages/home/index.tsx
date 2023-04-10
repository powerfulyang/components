import { Dialog } from '@/components/Dialog';
import { Button } from '@/components/Button';
import { css } from '@emotion/react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { waitFor } from '@powerfulyang/utils';

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

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={open}>
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
    </div>
  );
};

export default Home;
