import React from 'react';
import { render, fireEvent, waitFor,act } from '@testing-library/react-native';
import { FormContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<FormContainer onSubmit={onSubmit}/>);
      fireEvent.changeText(getByTestId('usernameInput'), 'kalle');
      fireEvent.changeText(getByTestId('passwordInput'), 'password');
      await act(async () => {
        fireEvent.press(getByTestId('submitButton'));
        await waitFor(() => {
          expect(onSubmit).toHaveBeenCalledTimes(1);
          expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password',
          });
        });
      });
    });
  });
});