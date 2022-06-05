import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Scheduling Dashboard', () => {
  render(<App />);
  const linkElement = screen.getByText(/Scheduling Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
