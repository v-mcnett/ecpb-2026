import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('mobile dropdown has high z-index', () => {
  const { container } = render(<Header />);
  const dropdown = container.querySelector('.dropdown-content') as HTMLElement | null;
  expect(dropdown).toBeInTheDocument();
  expect(dropdown).toHaveClass('z-[9999]');
});
