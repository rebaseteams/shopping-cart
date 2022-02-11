import { screen, render } from "@testing-library/react";
import { Stars } from ".";

describe('Star component', () => {
  it('Should render stars', () => {
    render(<Stars stars={5} />)
    expect(screen.getByTestId('star1')).toBeInTheDocument();
    expect(screen.getByTestId('star2')).toBeInTheDocument();
    expect(screen.getByTestId('star3')).toBeInTheDocument();
    expect(screen.getByTestId('star4')).toBeInTheDocument();
    expect(screen.getByTestId('star5')).toBeInTheDocument();
  });

  it('color check', () => {
    render(<Stars stars={3} />)
    expect(screen.getByTestId('star1')).toHaveClass('text-gray-900');
    expect(screen.getByTestId('star2')).toHaveClass('text-gray-900');
    expect(screen.getByTestId('star3')).toHaveClass('text-gray-900');
    expect(screen.getByTestId('star4')).toHaveClass('text-gray-200');
    expect(screen.getByTestId('star5')).toHaveClass('text-gray-200');
  });
})