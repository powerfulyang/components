import { Icon } from '@/components';
import { css } from '@emotion/react';
import { Button } from '@mui/material';

export const ButtonComponents = () => {
  return (
    <div
      css={css`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      `}
    >
      <Button>Default Button</Button>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
      <Button variant="contained" color="error">
        Danger Button
      </Button>
      <Button variant="text">Ghost Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button>Rounded Button</Button>
      <Button startIcon={<Icon type="icon-send" />}>Icon Button</Button>
      <Button variant="contained">Loading Button</Button>
    </div>
  );
};
