import { render } from '@testing-library/react';
import Box from './Box';


test('renders <Box /> without crashing', () => {
  render(<Box />);
});


test('matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
