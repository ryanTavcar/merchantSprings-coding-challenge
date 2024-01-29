import React from 'react';
import { render, waitFor } from '@testing-library/react';
import SalesTable from './SalesTable';

// Mock the UseFetchSales hook
jest.mock('./hooks/UseFetchSales', () => ({
  __esModule: true,
  default: jest.fn(() => []),
}));

test('renders SalesTable header', () => {
  const { getByText } = render(<SalesTable />);
  const headerText = getByText("Overdue Orders");
  expect(headerText).toBeInTheDocument();
});
