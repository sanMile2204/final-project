import Modal from "./Modal";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Modal component test suite', () => {
    it('Renders in the page', () => {
        render(
            <Modal
              onClickConfirm={() => {}}
              onClickCancel={() => {}}
              text="Example text"
            />
          );
        });

    it('renders the provided text', () => {
         const { getByText } = render(
          <Modal
            onClickConfirm={() => {}}
            onClickCancel={() => {}}
            text="Example text"
          />
        );
        expect(getByText('Example text')).toBeInTheDocument();
      });

    it('calls onClickConfirm when OK button is clicked', () => {
      const onClickConfirm = jest.fn();
      const { getByText } = render(
        <Modal
          onClickConfirm={onClickConfirm}
          onClickCancel={() => {}}
          text="Example text"
        />
      );
      fireEvent.click(getByText('OK'));
      expect(onClickConfirm).toHaveBeenCalled();
      });

      it('calls onClickCancel when CANCEL button is clicked', () => {
        const onClickCancel = jest.fn();
        const { getByText } = render(
          <Modal
            onClickConfirm={() => {}}
            onClickCancel={onClickCancel}
            text="Example text"
          />
        );
        fireEvent.click(getByText('CANCEL'));
        expect(onClickCancel).toHaveBeenCalled();
      });
  });