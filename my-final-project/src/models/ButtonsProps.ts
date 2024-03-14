interface ButtonProps {
    icon?: string,
    iconImage?: string,
    text?: string,
    type: "submit" | "reset" | "button" | undefined,
    applyGreenColor?: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    id?: number
}

export default ButtonProps;