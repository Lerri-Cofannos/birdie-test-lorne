import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders my custom text', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is my custom app/i);
  expect(linkElement).toBeInTheDocument();
});
