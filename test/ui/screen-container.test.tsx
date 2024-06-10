// ScreenContainer.test.tsx

import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import ScreenContainer from '@/components/screen-container.component';

describe('ScreenContainer', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ScreenContainer>
        <Text>Test Child</Text>
      </ScreenContainer>
    );

    // Check if the child component is rendered correctly
    expect(getByText('Test Child')).toBeTruthy();
  });

  it('applies the correct style to ScrollView', () => {
    const { getByTestId } = render(
      <ScreenContainer>
        <Text>Test Child</Text>
      </ScreenContainer>
    );
  });
});
