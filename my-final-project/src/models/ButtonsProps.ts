interface ButtonProps {
    icon?: string,
    iconImage?: string,
    text?: string,
    type: "submit" | "reset" | "button" | undefined,
    applyGreenColor?: boolean,
    onClick: () => void
}

export default ButtonProps;