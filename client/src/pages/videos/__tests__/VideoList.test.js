import React from 'react';
import {render, act} from '@testing-library/react'

import VideoList from '../VideoList';

const state = [
  { videoId: 'abcd'},
  { videoId: 'fdsg'},
  { videoId: 'bvcb'},
];

const urlPrefix = 'https://www.youtube.com/watch?v=';

describe('VideoList', () => {
  it("should show a list of videos", () => {
    const { getByText, getAllByRole } = render(<VideoList videos={state} />);
    expect(getByText(`${urlPrefix}abcd`)).toBeInTheDocument();
    expect(getByText(`${urlPrefix}fdsg`)).toBeInTheDocument();
    expect(getByText(`${urlPrefix}bvcb`)).toBeInTheDocument();
    expect(getAllByRole('item').length).toBe(3);
  });
});