/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable react/jsx-no-undef */
import { screen, render } from "@testing-library/react";
import { renderRating } from ".";

describe('Star component', () => {
  it('Should render stars', () => {
    const Rating = renderRating(5);

    render(<Rating />)
    expect(screen.getByTestId('star1')).toBeInTheDocument();
    expect(screen.getByTestId('star2')).toBeInTheDocument();
    expect(screen.getByTestId('star3')).toBeInTheDocument();
    expect(screen.getByTestId('star4')).toBeInTheDocument();
    expect(screen.getByTestId('star5')).toBeInTheDocument();
  });

  it('color check', () => {
    const Rating = renderRating(3);
    render(<Rating />)
    expect(screen.getByTestId('star1')).toHaveClass('text-gray-900');
    expect(screen.getByTestId('star2')).toHaveClass('text-gray-900');
    expect(screen.getByTestId('star3')).toHaveClass('text-gray-900');
    expect(screen.getByTestId('star4')).toHaveClass('text-gray-200');
    expect(screen.getByTestId('star5')).toHaveClass('text-gray-200');
  });
})