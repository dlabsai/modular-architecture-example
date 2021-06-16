import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders number 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/3/i);
  expect(linkElement).toBeInTheDocument();
});
