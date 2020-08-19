import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  withRouter: Comp => props => <Comp {...props} />,
}))

afterEach(cleanup);

describe('App', () => {
  it('renders App component', async () => {
    const pathname = '/some-route'
    render(<App location={{ pathname }} />)
    expect(screen.getByText('SpaceX Launch Program')).toBeInTheDocument();
    expect(screen.getByText('Shekhar Raval')).toBeInTheDocument();
  });
});