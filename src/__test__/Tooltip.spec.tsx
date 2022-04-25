import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { Tooltip } from '@/components';

describe('test Tooltip', () => {
  it('test Tooltip', async () => {
    render(<Tooltip title="description">Hover me</Tooltip>);

    fireEvent.mouseEnter(screen.getByText('Hover me'));

    await waitFor(() => screen.getByText('description'));
    const test = screen.getByRole('tooltip');
    expect(test).toBeInTheDocument();
  });
});
