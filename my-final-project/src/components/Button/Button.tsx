import './Button.css';
import  ButtonProps from '../../models/ButtonsProps';


const Button: React.FC<ButtonProps> = ({icon, iconImage, text, type, onClick}) => {
   return( 
    <button className="icon-button" onClick={onClick} type={type}>
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