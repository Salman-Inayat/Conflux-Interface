import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SideBar from "./SideBar";

afterEach(cleanup);

it("Check if any radio button is checked", () => {
    const { getByLabelText} = render(<SideBar />);
    const r_button1 = getByLabelText('landing') 
    const r_button2 = getByLabelText('search')
    expect(r_button1).not.toBeChecked();
    expect(r_button2).not.toBeChecked();
});


it("Test if any radio button is checked when a button is clicked", () => {
    const { getByLabelText} = render(<SideBar />);
    const r_button1 = getByLabelText('landing') 
    const r_button2 = getByLabelText('search')
    fireEvent.click(r_button1)
    expect(r_button1).toBeChecked();
    expect(r_button2).not.toBeChecked();
});


it("Check value of radio button when changed", () => {
    const { getByLabelText} = render(<SideBar />);
    const payment_info_button = getByLabelText('payment_info') 
    fireEvent.change(payment_info_button, {target: {value:'payment_info'}})
    expect(payment_info_button.value).toBe("payment_info");
});

// it("button click changes props", () => {
//   const { getByText } = render(
//     <App>
//       <SideBar />
//     </App>
//   );

//   expect(getByText(/Moe/i).textContent).toBe("Moe");

//   fireEvent.click(getByText("Change Name"));

//   expect(getByText(/Steve/i).textContent).toBe("Steve");
// });
