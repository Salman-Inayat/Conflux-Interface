import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app correctly', () => {
  render(<App/>);
  const linkElement = screen.getByText("Alfabolt Event Flow Analysis");
  expect(linkElement).toBeInTheDocument();
});
