import { css } from '@emotion/react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { waitFor } from '@powerfulyang/utils';
import { Button, Dialog, Popover } from '@mui/material';
import toast from 'react-hot-toast';

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

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <div
      css={css`
        padding: 20px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      `}
    >
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          toast.success(`hello world`);
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
          <Button variant="contained" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              mutation.mutate();
            }}
            autoFocus
          >
            {`Yes, I'm sure`}
          </Button>
        </div>
      </Dialog>
      <Button
        variant="contained"
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
    </div>
  );
};

export default Home;
