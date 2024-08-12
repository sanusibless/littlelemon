import { render, screen, fireEvent } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./component/booktable/BookDiv";

import React from "react";

test("Testing the function in the Update Reducer and initiatialReducer", ()=> {
    expect(initializeTimes()).toStrictEqual([
        "11:00", "13:00", "16:00", "20:00"
    ]);
    expect(updateTimes([
        "11:00", "13:00", "16:00", "20:00"
    ], { type: "SELECT", time : "16:00" })).toStrictEqual(
        [
            "11:00", "13:00", "20:00"
        ]
    );
})

