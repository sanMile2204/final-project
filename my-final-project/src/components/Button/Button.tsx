import './Button.css';
import  ButtonProps from './ButtonsProps';


const Button: React.FC<ButtonProps> = ({icon, iconImage, text, type, onClick, applyGreenColor, id}) => {

   return( 
    <button className={applyGreenColor !== undefined ? applyGreenColor ? 'icon-button-green' : 'icon-button-red': 'icon-button'} onClick={onClick} type={type} id={id?.toString()}>
        {
            icon ? <span className="icon">{icon}</span> :  null
        }
        {
            iconImage ? <img src={iconImage} alt="icon" className="icon"/> :  null
        }
        {
            text ? <span className="text">{text}</span> :  null
        }
    </button>
   )
}

export default Button;