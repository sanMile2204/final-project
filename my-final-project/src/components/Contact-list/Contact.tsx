import './Contact.css';
import logo from '../../assets/Logo.png';
import Button from '../Button/Button';
import  ButtonProps from '../../models/ButtonsProps';

interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    isFavorite: boolean;
  };

  interface Props {
    contact: ContactData;
    buttons: ButtonProps[];
  }

const Contact: React.FC<Props> = ({contact, buttons}) => {
    return (
        <div className='contact-container'>
            <img className={contact.isFavorite ? 'round-image-favorite' : 'round-image'}  src={logo}></img>
            <label>{contact.firstName}</label>
            <span>{contact.email}</span>
            <hr className="linea-divisoria"></hr>
            <div className='button-container'>
            {
              buttons.map(
                (button, index) => (
                  <Button key={index} text={button.text} type={button.type} onClick={button.onClick} icon={button.icon} iconImage={button.iconImage} applyGreenColor={button.applyGreenColor}></Button>
              ))
            }
            </div>
        </div>
    )
}

export default Contact;