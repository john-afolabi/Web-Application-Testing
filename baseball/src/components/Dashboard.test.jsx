import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

describe("Dashboard", () => {
  it("Should render all buttons", () => {
    const dashboard = rtl.render(<Dashboard />);
    expect(dashboard.getByText(/strike/i));
    expect(dashboard.getByText(/ball/i));
    expect(dashboard.getByText(/foul/i));
    expect(dashboard.getByText(/hit/i));
  });

  it("Should increase balls count by one when clicking on the ball button", () => {
    const app = rtl.render(<App />);
    expect(app.getByText(/balls: 0/i));
    rtl.fireEvent.click(app.getByTestId("ball-button"));
    expect(app.getByText(/balls: 1/i));
  });

  it("Should increase strikes count by one when clicking on the strikes button", () => {
    const app = rtl.render(<App />);
    expect(app.getByText(/strikes: 0/i));
    rtl.fireEvent.click(app.getByTestId("strike-button"));
    expect(app.getByText(/strikes: 1/i));
  });

  it("Should reset strikes and ball count when clicking on hit", () => {
    const app = rtl.render(<App />);
    expect(app.getByText(/balls: 0/i));
    expect(app.getByText(/strikes: 0/i));
    rtl.fireEvent.click(app.getByTestId("ball-button"));
    expect(app.getByText(/balls: 1/i));
    rtl.fireEvent.click(app.getByTestId("strike-button"));
    expect(app.getByText(/strikes: 1/i));
    rtl.fireEvent.click(app.getByTestId("hit-button"));
    expect(app.getByText(/balls: 0/i));
    expect(app.getByText(/strikes: 0/i));
  });

  it("Should reset all counts when strikes reaches 3 and balls reaches 4", () => {
    const app = rtl.render(<App />);
    for (let i = 0; i < 4; i++) {
      rtl.fireEvent.click(app.getByTestId("ball-button"));
      rtl.fireEvent.click(app.getByTestId("strike-button"));
    }
    expect(app.getByText(/strikes: 0/i));
    expect(app.getByText(/balls: 0/i));
    
    rtl.fireEvent.click(app.getByTestId("strike-button"));
    for (let i = 0; i < 5; i++) {
      rtl.fireEvent.click(app.getByTestId("ball-button"));
    }
    expect(app.getByText(/strikes: 0/i));
    expect(app.getByText(/balls: 0/i));
  });
});
