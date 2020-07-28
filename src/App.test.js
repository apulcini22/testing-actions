import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

describe("Does a link tag render in dom", () => {
  test("renders learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Does button have submit value", () => {
  it("renders learn react link", () => {
    const { getByTestId } = render(<App />); // Use render part to get the element you are looking for
    const button = getByTestId("button");
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveTextContent("Click Me");
  });
});

describe("Does text render for p tag", () => {
  const boom = "expected to say 'This should say hi'";
  it(boom, () => {
    const { getByTestId } = render(<App />); // Use render part to get the element you are looking for
    const textField = getByTestId("sayhi");
    expect(textField).toHaveTextContent(/^This should say hi$/); //  uses regex to match the string
  });
});

describe("Does data match", () => {
  for (let item of data) {
    test("delectus aut autem", () => {
      expect(item.title).toEqual("delectus aut autem");
    });
  }
});

describe("data has an id property", () => {
  for (let item of data) {
    test("delectus aut autem", () => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("title");
    });
  }
});
