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
    
    fireEvent.click(btn)
    expect(btn).toBeDefined();
    expect(headElement).toBeInTheDocument();
});

