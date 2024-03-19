export default interface ButtonProps {
    icon?: string,
    iconImage?: string,
    text?: string,
    type: "submit" | "reset" | "button" | undefined,
    applyGreenColor?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    id?: number
};

export const removeFavoriteButton: ButtonProps = {
    icon: "X",
    text: "REMOVE",
    type: "button",
    applyGreenColor: false
  };

  export const addFavoriteButton: ButtonProps = {
    iconImage: "/src/assets/heart.svg",
    type: "button",
    applyGreenColor: true
  };

  export const deleteButton: ButtonProps = {
    iconImage: "/src/assets/delete.svg",
    type: "button",
    applyGreenColor: false
  };

  export const removeButton: ButtonProps = {
    iconImage: "/src/assets/delete-button.svg",
    type: "button",
    applyGreenColor: false
  };