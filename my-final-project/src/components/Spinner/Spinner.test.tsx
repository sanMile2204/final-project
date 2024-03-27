import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe('Spinner component test suite', () => {
    it('Renders in the page', () => {
        render(<Spinner/>)
        expect(true).toBeTruthy()
    });
});