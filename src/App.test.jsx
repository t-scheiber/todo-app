import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App.jsx';

const add = (text) => {
  fireEvent.change(screen.getByPlaceholderText('Add a new todo...'), { target: { value: text } });
  fireEvent.click(screen.getByRole('button', { name: 'Add' }));
};
afterEach(() => jest.restoreAllMocks());

test('starts with the existing heading and an empty list', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: '✅ Todo List' })).toBeVisible();
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
});
test('adds entered text and clears the input', () => {
  render(<App />); add('Buy milk');
  expect(screen.getByText('Buy milk')).toBeVisible();
  expect(screen.getByPlaceholderText('Add a new todo...')).toHaveValue('');
});
test.each(['', '   ', '\t'])('rejects blank input %j', (text) => {
  render(<App />); add(text);
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
});
test('preserves entered text, including surrounding spaces', () => {
  render(<App />); add('  Buy milk  ');
  expect(screen.getByRole('listitem').querySelector('.todo-text').textContent).toBe('  Buy milk  ');
});
test('form submission adds a todo without navigation', () => {
  render(<App />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Keyboard task' } });
  expect(fireEvent.submit(screen.getByRole('textbox').closest('form'))).toBe(false);
  expect(screen.getByText('Keyboard task')).toBeVisible();
});
test('complete and undo preserve the todo text', () => {
  render(<App />); add('Buy milk');
  fireEvent.click(screen.getByRole('button', { name: '✓ Done' }));
  expect(screen.getByRole('listitem')).toHaveClass('completed');
  fireEvent.click(screen.getByRole('button', { name: '↩️ Undo' }));
  expect(screen.getByRole('listitem')).not.toHaveClass('completed');
  expect(screen.getByText('Buy milk')).toBeVisible();
});
test('deletes a todo and returns to the empty list', () => {
  render(<App />); add('Buy milk');
  fireEvent.click(screen.getByRole('button', { name: '🗑️ Delete' }));
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
});
test('same-millisecond additions complete independently', () => {
  jest.spyOn(Date, 'now').mockReturnValue(123);
  render(<App />); add('First'); add('Second');
  const rows = screen.getAllByRole('listitem');
  fireEvent.click(within(rows[0]).getByRole('button', { name: '✓ Done' }));
  expect(rows[0]).toHaveClass('completed');
  expect(rows[1]).not.toHaveClass('completed');
});
test('same-millisecond duplicate text rows delete independently', () => {
  jest.spyOn(Date, 'now').mockReturnValue(123);
  render(<App />); add('Task'); add('Task');
  fireEvent.click(within(screen.getAllByRole('listitem')[0]).getByRole('button', { name: '🗑️ Delete' }));
  expect(screen.getAllByRole('listitem')).toHaveLength(1);
  expect(screen.getByText('Task')).toBeVisible();
});
test('text resembling HTML is rendered as text', () => {
  render(<App />); add('<img src=x onerror=alert(1)>');
  expect(screen.getByText('<img src=x onerror=alert(1)>')).toBeVisible();
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});
