import { render, screen } from "@testing-library/react";
import { BreadCrumb } from ".";

const testPath = [
  {
    name: 'Men', url: '#'
  },
  {
    name: 'Cloths', url: '#'
  }
]

describe("BreadCrumb", () => {
  it('Should render complete path', () => {
    render(<BreadCrumb path={testPath} name={'I phone 13'}/>)
    expect(screen.getByText(/Men/)).toBeInTheDocument();
    expect(screen.getByText(/Cloths/)).toBeInTheDocument();
    expect(screen.getByText(/I phone 13/)).toBeInTheDocument();
  })
})