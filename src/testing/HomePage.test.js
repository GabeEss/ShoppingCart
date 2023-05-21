import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../pages/HomePage';

// Had to use: npm install --save-dev @testing-library/jest-dom
test('renders a link with the correct href attribute', () => {
    render(<HomePage />);
    const linkElement = screen.getByRole('link', { name: 'To Shop' });
    expect(linkElement).toHaveAttribute('href', '/Shop');
  });
