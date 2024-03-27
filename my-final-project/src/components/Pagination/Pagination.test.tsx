import { fireEvent, render } from "@testing-library/react";
import Paginator from "./Pagination";
import "@testing-library/jest-dom";

describe('Pagination component test suite', () => {
    it('renders correctly', () => {
        const onPageChange = jest.fn();
        const { getByText } = render(
          <Paginator
            length={20}
            postsPerPage={5}
            onPageChange={onPageChange}
            currentPageExternal={1}
          />
        );
        expect(getByText('1 de 4')).toBeInTheDocument();
        expect(getByText('<')).toBeInTheDocument();
        expect(getByText('>')).toBeInTheDocument();
      });
    
      it('calls onPageChange when prev button is clicked', () => {
        const onPageChange = jest.fn();
        const { getByText } = render(
          <Paginator
            length={20}
            postsPerPage={5}
            onPageChange={onPageChange}
            currentPageExternal={2}
          />
        );
        fireEvent.click(getByText('<'));
        expect(onPageChange).toHaveBeenCalledWith(1);
      });
    
      it('calls onPageChange when next button is clicked', () => {
        const onPageChange = jest.fn();
        const { getByText } = render(
          <Paginator
            length={20}
            postsPerPage={5}
            onPageChange={onPageChange}
            currentPageExternal={2}
          />
        );
        fireEvent.click(getByText('>'));
        expect(onPageChange).toHaveBeenCalledWith(3);
      });
});