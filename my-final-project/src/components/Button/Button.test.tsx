import Button from "./Button";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Button component test suite', () => {
    it('Renders in the page', () => {
        render(<Button type="button" text="Click me"/>)
        expect(true).toBeTruthy()
    });
    
    it('renders button text', () => {
        const { getByText } = render(<Button text="Click me" type="button"/>);
        expect(getByText('Click me')).toBeInTheDocument();
      });
    
    it('does not render icon when icon prop is not provided', () => {
        const { queryByRole } = render(<Button type="button"/>);
        expect(queryByRole('img')).toBeNull();
    });

    it('renders icon image when iconImage is provided', () => {
        const { getByAltText } = render(<Button iconImage="path/to/image.png" type="button"/>);
        expect(getByAltText('icon')).toBeInTheDocument();
      });
    
    it('launch onClick event when button is clicked', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<Button onClick={handleClick} type="button"/>);
        fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies red color class when applyGreenColor is false', () => {
        const { container } = render(<Button applyGreenColor={false} type="button"/>);
        expect(container.firstChild).toHaveClass('icon-button-red');
      });
  });