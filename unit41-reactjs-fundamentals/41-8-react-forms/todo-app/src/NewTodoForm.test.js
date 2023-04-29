import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm.js'; 


test('<NewTodoForm /> renders without crashing', () => {
  render(<NewTodoForm />);
});


test('fragment matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});