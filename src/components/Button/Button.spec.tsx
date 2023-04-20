import { render } from '@testing-library/react';
import { Button } from '@/components';
import { describe, expect, it } from '@jest/globals';

describe('Button', () => {
  it('should invoke onClick', () => {
    const onClick = jest.fn();
    const wrapper = render(<Button onClick={onClick}>Button</Button>);
    wrapper.getByText('Button').click();
    expect(onClick).toHaveBeenCalled();
  });

  it('should disable click', () => {
    const onClick = jest.fn();
    const wrapper = render(
      <Button onClick={onClick} disabled>
        Button
      </Button>,
    );
    wrapper.getByText('Button').click();
    expect(onClick).not.toHaveBeenCalled();
  });

  it('snapshot', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
