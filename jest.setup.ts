import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line react/display-name
    return React.createElement('img', props);
  }
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => {
    // eslint-disable-next-line react/display-name
    return React.createElement('a', props, children);
  }
}));
