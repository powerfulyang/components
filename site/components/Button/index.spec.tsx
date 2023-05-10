import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { Button } from '@mui/material';
import { css } from '@emotion/react';

describe('button', () => {
  it('should render', () => {
    const wrapper = render(
      <Button
        css={css`
          color: red;
        `}
      >
        Button
      </Button>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
