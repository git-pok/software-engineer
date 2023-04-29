import { render } from '@testing-library/react';
import EditTodoForm from './EditTodoForm.js'; 


test('<EditTodoForm /> renders without crashing', () => {
  render(<EditTodoForm />);
});


test('fragment matches snapshot', () => {
  const { asFragment } = render(<EditTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});