import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList.js';
import {
  inputBc1, inputW1, inputH1,
  inputBc2, inputW2, inputH2
} from './_testCommon.js';


test('renders <BoxList /> without crashing', () => {
  render(<BoxList />);
});


test('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});


test('box should not be rendered', () => {
  const { 
    queryByText
  } = render(<BoxList />);

  const box = queryByText("X");
  expect(box).not.toBeInTheDocument();
});


test('form adds new box', () => {
  const { 
    getByText, getByLabelText
  } = render(<BoxList />);

  const bkgColorInput = getByLabelText("Background Color");
  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const btn = getByText("ADD BOX"); 

  fireEvent.change(bkgColorInput, inputBc1);
  fireEvent.change(widthInput, inputW1);
  fireEvent.change(heightInput, inputH1);

  fireEvent.click(btn);

  const box = getByText("X");
  expect(box).toBeInTheDocument();
});


test('form inputs are empty after submit', () => {
  const { 
    getByText, getByLabelText
  } = render(<BoxList />);

  const bkgColorInput = getByLabelText("Background Color");
  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const btn = getByText("ADD BOX"); 

  fireEvent.change(bkgColorInput, inputBc1);
  fireEvent.change(widthInput, inputW1);
  fireEvent.change(heightInput, inputH1);

  fireEvent.click(btn);

  expect(bkgColorInput).toHaveValue("");
  expect(widthInput).toHaveValue("");
  expect(heightInput).toHaveValue("");
});


test('delete box with X button', () => {
  const { 
    getByText, getByLabelText
  } = render(<BoxList />);

  const bkgColorInput = getByLabelText("Background Color");
  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const btn = getByText("ADD BOX"); 

  fireEvent.change(bkgColorInput, inputBc1);
  fireEvent.change(widthInput, inputW1);
  fireEvent.change(heightInput, inputH1);

  fireEvent.click(btn);

  const box = getByText("X");
  fireEvent.click(box);
  expect(box).not.toBeInTheDocument();
});


test('inputs should be empty', () => {
  const { 
    getByText, getByLabelText, queryByText
  } = render(<BoxList />);

  const bkgColorInput = getByLabelText("Background Color");
  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");

  expect(bkgColorInput).not.toHaveValue("DarkGoldenRod");
  expect(widthInput).not.toHaveValue("240px");
  expect(heightInput).not.toHaveValue("240px");
});


test('inputs should have values', () => {
  const { 
    getByText, getByLabelText,
    queryByText
  } = render(<BoxList />);

  const bkgColorInput = getByLabelText("Background Color");
  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");

  expect(bkgColorInput).not.toHaveValue("DarkGoldenRod");
  expect(widthInput).not.toHaveValue("240px");
  expect(heightInput).not.toHaveValue("240px");

  fireEvent.change(bkgColorInput, inputBc1);
  fireEvent.change(widthInput, inputW1);
  fireEvent.change(heightInput, inputH1);

  expect(bkgColorInput).toHaveValue("DarkGoldenRod");
  expect(widthInput).toHaveValue("240px");
  expect(heightInput).toHaveValue("240px");
});
