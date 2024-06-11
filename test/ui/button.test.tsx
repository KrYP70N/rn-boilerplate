import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { colors, sizes } from '@/constants';
import Button from '@/components/button.component';
import P from '@/components/p.component';

describe('Button component', () => {
  it('renders correctly with text', () => {
    const { getByText } = render(<Button text="Click Me" />);
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  });

  it('renders correctly with children', () => {
    const { getByText } = render(
      <Button>
        <P>Click Me</P>
      </Button>
    );
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  });

  it('calls the press function when pressed', () => {
    const mockPress = jest.fn();
    const { getByRole } = render(<Button text="Press Me" press={mockPress} />);
    const button = getByRole('button');
    fireEvent.press(button);
    expect(mockPress).toHaveBeenCalledTimes(1);
  });
});
