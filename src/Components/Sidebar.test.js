import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  act,
} from "@testing-library/react";
import SideBar from "./SideBar";
import { GET_SEARCH } from "./SideBar";
import { MockedProvider } from "@apollo/client/testing";
import App from "../App";

afterEach(cleanup);

it("Check if any radio button is checked without triggering any event", () => {
  const { getByLabelText } = render(<SideBar />);
  const r_button1 = getByLabelText("landing");
  const r_button2 = getByLabelText("search");
  expect(r_button1).not.toBeChecked();
  expect(r_button2).not.toBeChecked();
});

it("Test if a radio button is checked when it is clicked", () => {
  const { getByLabelText } = render(<SideBar />);
  const search_button = getByLabelText("search");
  fireEvent.click(search_button, { target: { checked: true }});
  expect(search_button.checked).toEqual(true);
});

it("Check value of radio button when changed", () => {
  const { getByLabelText } = render(<SideBar />);
  const payment_info_button = getByLabelText("payment_info");
  fireEvent.change(payment_info_button, { target: { value: "payment_info" } });
  expect(payment_info_button.value).toBe("payment_info");
});

it("should update state on click", async () => {
  const setLabelValue = jest.fn();
  const { getByLabelText } = render(<SideBar onChange={setLabelValue} />);
  const landing_button = getByLabelText("landing");
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation((labelvalue) => [labelvalue, setLabelValue]);

  act(() => {
    fireEvent.change(landing_button);
  });

  await waitFor(() => {
    expect(setLabelValue).toBeTruthy();
  });
});

const response_data = {
  data: {
    search: [
      {
        To: "signup_button",
        From: "input_password",
        Weight: 3,
      },
      {
        To: "apply_filters",
        From: "input_password",
        Weight: 2,
      },
      {
        To: "signup_button",
        From: "    product_page",
        Weight: 3,
      },
      {
        To: "apply_filters",
        From: "    product_page",
        Weight: 1,
      },
      {
        To: "apply_filters",
        From: "landing",
        Weight: 1,
      },
      {
        To: "search",
        From: "signup_button",
        Weight: 6,
      },
      {
        To: "search",
        From: "apply_filters",
        Weight: 4,
      },
      {
        To: "payment_info",
        From: "search",
        Weight: 4,
      },
      {
        To: "input_email",
        From: "search",
        Weight: 6,
      },
      {
        To: "payment_success",
        From: "payment_info",
        Weight: 4,
      },
      {
        To: "payment_success",
        From: "input_email",
        Weight: 1,
      },
      {
        To: "view_more_details",
        From: "input_email",
        Weight: 3,
      },
      {
        To: "confirm_email",
        From: "input_email",
        Weight: 2,
      },
    ],
  },
};

it("Renders graphQL query and save snapshot", async () => {
  const mocks = [
    {
      request: {
        query: GET_SEARCH,
      },
      result: response_data,
    },
  ];

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SideBar />
    </MockedProvider>
  );

  await waitFor(() => new Promise((res) => setTimeout(res, 0)));

  expect(container).toMatchSnapshot();
});

it("Check graphQL query for error", async () => {
  const mocks = [
    {
      request: {
        query: GET_SEARCH,
      },
      error: new Error("An error occurred"),
    },
  ];

  const { findByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  const productTag = await findByText("Error");
  expect(productTag).toBeInTheDocument();
});
