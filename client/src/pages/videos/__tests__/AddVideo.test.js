import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react'

import AddVideo from '../AddVideo';

const addVideoHandler = jest.fn();

const setup = () => {
  const utils = render(<AddVideo addVideoHandler={addVideoHandler} />);
  const input = utils.getByPlaceholderText('Enter Video ID');
  const button = utils.getByText('Add');
  return {
    input,
    button,
    ...utils,
  }
}

describe('AddVideo', () => {
  beforeEach(() => {

  });
  it("should show input and button", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  it("should display user input", () => {
    const { input } = setup();
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
  });

  it("should display error validation", async() => {
    const { input, getByText } = setup();
    fireEvent.change(input, { target: { value: 'test' }});
    expect(input.value).toBe('test');
    await waitFor(() => {
      expect(getByText('Video id must be 11 characters.')).toBeInTheDocument();
    })
  });
});