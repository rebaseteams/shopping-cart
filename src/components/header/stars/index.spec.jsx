import { screen, render } from "@testing-library/react";
import { Stars } from ".";

describe('Star componet', () => {
  it('Should render one star', () => {
    render(<Stars stars={1} />)
    expect(screen.getByTestId('star1')).toBeInTheDocument();
  });

  it('Should render two stars', () => {
    render(<Stars stars={2} />)
    expect(screen.getByTestId('star2')).toBeInTheDocument();
  });

  it('Should render three stars', () => {
    render(<Stars stars={3} />)
    expect(screen.getByTestId('star3')).toBeInTheDocument();
  });
})