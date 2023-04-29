import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm.js'; 


test('<NewBoxForm /> renders without crashing', () => {
  render(<NewBoxForm />);
});


test('fragment matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});