import React from "react";
import {getByTestId, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Square from './Square'

describe('Testing for child square component', () => {

    it("Rendering empty Square",() => {
        const { getByTestId } = render(<Square data-testid="square-8"/>)
    expect(getByTestId("square-8")).toBeDefined();
})

});
