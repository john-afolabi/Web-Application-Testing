import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

describe("Display", () => {
  it("Should display balls and strikes elements", () => {
    const display = rtl.render(<Display />);
    expect(display.getByText(/balls:/i));
    expect(display.getByText(/strikes:/i));
  });

  it('Should display number of balls and strikes', () => {
    const display = rtl.render(<Display balls={2} strikes={1}/>);
    expect(display.getByText(/balls: 2/i))
    expect(display.getByText(/strikes: 1/i))
  })

  it('Should display zero balls and strikes with no props', () => {
    const display = rtl.render(<Display/>);
    expect(display.getByText(/balls: 0/i))
    expect(display.getByText(/strikes: 0/i))
  })
});
