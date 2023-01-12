import { Button, Icon } from '@/components';
import { css } from '@emotion/react';

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
      <Button appearance="primary">Primary Button</Button>
      <Button appearance="secondary">Secondary Button</Button>
      <Button appearance="error">Danger Button</Button>
      <Button ghost appearance="primary">
        Ghost Button
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button rounded appearance="primary">
        Rounded Button
      </Button>
      <Button appearance="primary" icon={<Icon type="icon-send" />}>
        Icon Button
      </Button>
      <Button loading appearance="primary">
        Loading Button
      </Button>
    </div>
  );
};
