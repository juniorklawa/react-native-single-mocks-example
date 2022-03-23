import {render} from '@testing-library/react-native';
import React from 'react';
import {mocked} from 'jest-mock';
import SubscriptionCard from '.';
import {auth} from '../../services/api';

jest.mock('../../services/api');

describe('Banner component', () => {
  it('text should be "Active" if subscription is active', () => {
    const authMocked = mocked(auth as any);

    authMocked.mockReturnValue({
      user: {
        isSubscriptionActive: true,
      },
    });

    const {getByTestId} = render(<SubscriptionCard />);
    const cardText = getByTestId('subscription-card-label');

    expect(cardText.children[0]).toBe('Active');
  });

  it('text should be "Not Active" if subscription is not active', () => {
    const authMocked = mocked(auth as any);

    authMocked.mockReturnValue({
      user: {
        isSubscriptionActive: false,
      },
    });

    const {getByTestId} = render(<SubscriptionCard />);
    const cardText = getByTestId('subscription-card-label');

    expect(cardText.children[0]).toBe('Not Active');
  });
});
