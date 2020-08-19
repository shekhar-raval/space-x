import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SpaceXWidget from './SpaceXWidget';

const props = {
  data: {
    links: {
      mission_patch: 'some-path'
    },
    mission_name: 'space-x',
    flight_number: '45',
    mission_id: ['41', '0'],
    launch_year: 2019,
    launch_success: true
  }
}

jest.mock('react-router-dom', () => ({
  withRouter: Comp => props => <Comp {...props} />,
}))
afterEach(cleanup)
describe('SpaceXWidget Component', () => {
  it("renders without crashing", () => {
    render(<SpaceXWidget {...props} />)
  });
  it("render widget successfully", () => {
    const { getByTestId } = render(<SpaceXWidget {...props} />);
    expect(getByTestId("spaceComponent")).toBeInTheDocument();
  });
  it("should have Static labels", () => {
    const { getByText } = render(<SpaceXWidget {...props} />);
    expect(getByText(/Launch Year/)).toBeInTheDocument();
    expect(getByText(/Successfull Launch/)).toBeInTheDocument();
    expect(getByText(/Successfull Landing/)).toBeInTheDocument();
    expect(getByText(/Missing Ids/)).toBeInTheDocument();
  });

  it("should have mission lists ", () => {
    const { queryByTestId } = render(<SpaceXWidget {...props} />);
    expect(queryByTestId('mission-list')).not.toEqual(null);
  })
})

