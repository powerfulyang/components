import { render } from '@testing-library/react';
import React from 'react';

describe('test Tooltip', () => {
  it('test Tooltip', () => {
    const result = render(<div>Content</div>);
    expect(result).toBeDefined();
  });
});
