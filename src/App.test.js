import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link for Get Top 10 Stories', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Top 10 Stories/i);
  expect(linkElement).toBeInTheDocument();
});
