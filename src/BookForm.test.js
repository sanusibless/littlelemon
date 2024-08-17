import { render, fireEvent,screen } from "@testing-library/react";
import React from "react";
import { act } from "react";

import BookForm from "./component/booktable/BookForm";

test("Testing Bookform",()=> {
    const dispatch = jest.fn();
    const availableTimes = [
        "11:00", "13:00", "16:00", "20:00"
    ];
    render(<BookForm availableTimes={availableTimes} dispatch={dispatch} />)
    const headElement = screen.getByText("Book Now");

    const btn = screen.getByText("Book");
    const dateInput = screen.getByTestId("res-date");
    const timeInput = screen.getByTestId("res-time");
    const guestInput = screen.getByTestId("guests");
    const occasionInput = screen.getByTestId("occassion");
    const specialRequestTextArea = screen.getByTestId("special-request")

    fireEvent.click(btn)

    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toBeInTheDocument();

    expect(timeInput).toHaveAttribute("required");
    expect(timeInput).toBeInTheDocument();


    expect(guestInput).toBeInTheDocument();
    expect(guestInput).toHaveAttribute('min');
    expect(guestInput.getAttribute("min")).toBe("1");

    expect(specialRequestTextArea).toBeInTheDocument();

    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput).toHaveAttribute('required');

    expect(btn).toBeDefined();
    expect(headElement).toBeInTheDocument();
});

