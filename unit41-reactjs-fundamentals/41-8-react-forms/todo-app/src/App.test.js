import { render } from '@testing-library/react';
import App from './App.js';


test('renders <App /> without crashing', () => {
  render(<App />);
});


test('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
