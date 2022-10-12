import '@testing-library/jest-dom';

export const windowMock = {
  scrollTo: jest.fn()
};

Object.assign(global, global, windowMock);