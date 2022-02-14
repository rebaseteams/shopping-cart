import { render, screen } from "@testing-library/react";
import { renderLoading } from ".";


describe('loading component', () => {
  test('render component with animation class', () => {
    render(renderLoading());
    expect(screen.getByTestId('loading')).toHaveClass('animate-pulse');
  })
})