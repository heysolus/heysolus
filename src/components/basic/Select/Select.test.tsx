import React from "react";
import { render } from "@testing-library/react";

import Button from "./Select";

describe("Button", () => {
    test("renders the Button component", () => {
        render(<Button title="Hello world!" />);
    });
});
