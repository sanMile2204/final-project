interface ButtonProps {
    icon?: string,
    iconImage?: string,
    text?: string,
    type: "submit" | "reset" | "button" | undefined,
    onClick: () => void;
}

export default ButtonProps;