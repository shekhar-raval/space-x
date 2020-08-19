import React from 'react';
import { render } from '@testing-library/react';
import FilterBox from './FilterBox';

const props = {
  location: {
    search: ''
  }
}

jest.mock('react-router-dom', () => ({
  withRouter: Comp => props => <Comp {...props} />,
}))

describe('FilterBox Component', () => {
  it("renders without crashing", () => {
    render(<FilterBox {...props} />)
  });

  it("render filter box correctly", () => {
    const { getByTestId } = render(<FilterBox {...props}/>);
    expect(getByTestId("filterComponent")).toBeInTheDocument();
  });
})

