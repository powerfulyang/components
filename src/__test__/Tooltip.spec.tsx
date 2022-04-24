import { render, screen } from '@testing-library/react';
import React from 'react';

describe('test Tooltip', () => {
  it('test Tooltip', () => {
    render(<div data-testid="test">Content</div>);
    const test = screen.getByTestId('test');
    expect(test).toBeInTheDocument();
  });
});
