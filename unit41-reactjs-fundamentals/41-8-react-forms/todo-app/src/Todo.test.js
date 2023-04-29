import { render } from '@testing-library/react';
import {
  inputBc1, inputBc2, inputBc3,
  inputBcEdit1, inputBcEdit2
} from './_testCommon.js';
import Todo from './Todo';


test('renders <Todo /> without crashing', () => {
  render(<Todo />);
});


test('matches snapshot', () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});