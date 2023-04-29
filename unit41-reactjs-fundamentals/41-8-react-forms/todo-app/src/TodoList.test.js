import { render, fireEvent } from '@testing-library/react';
import {
  inputBc1, inputBc2, inputBc3,
  inputBcEdit1, inputBcEdit2
} from './_testCommon.js';
import TodoList from './TodoList.js';


test('renders <TodoList /> without crashing', () => {
  render(<TodoList />);
});


test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});


test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});


test('todo should not be rendered', () => {
  const { 
    queryByText
  } = render(<TodoList />);

  const box = queryByText("X");
  expect(box).not.toBeInTheDocument();
});


test('form adds new todo', () => {
  const { 
    getByText, getByLabelText, queryByText
  } = render(<TodoList />);

  const input = getByLabelText("Todo");
  const btn = getByText("ADD TODO");
  const noTodo = queryByText("Car Wash");
  expect(noTodo).not.toBeInTheDocument();

  fireEvent.change(input, inputBc1);
  fireEvent.click(btn);

  const todo = queryByText("Car Wash");
  const box = getByText("X");

  expect(todo).toBeInTheDocument();
  expect(box).toBeInTheDocument();
});


test('form inputs are empty after submit', () => {
  const { 
    getByText, getByLabelText
  } = render(<TodoList />);

  const input = getByLabelText("Todo");
  const btn = getByText("ADD TODO"); 

  fireEvent.change(input, inputBc1);

  fireEvent.click(btn);

  expect(input).toHaveValue("");
});


test('delete todo with X button', () => {
  const { 
    getByText, getByLabelText
  } = render(<TodoList />);

  const input = getByLabelText("Todo");
  const btn = getByText("ADD TODO"); 

  fireEvent.change(input, inputBc1);

  fireEvent.click(btn);

  const todoDeleteBtn = getByText("X");
  fireEvent.click(todoDeleteBtn);
  expect(todoDeleteBtn).not.toBeInTheDocument();
});


test('inputs should be empty', () => {
  const { 
    getByLabelText
  } = render(<TodoList />);

  const input = getByLabelText("Todo");

  expect(input).not.toHaveValue("Car Wash");
});


test('inputs should have values', () => {
  const { 
    getByLabelText
  } = render(<TodoList />);

  const input = getByLabelText("Todo");

  expect(input).not.toHaveValue("Car Wash");

  fireEvent.change(input, inputBc1);

  expect(input).toHaveValue("Car Wash");
});