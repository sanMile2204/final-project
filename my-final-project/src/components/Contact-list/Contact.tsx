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
    button: ButtonProps;
  }

const Contact: React.FC<Props> = ({contact, button}) => {
    return (
        <div className='contact-container'>
            <img className={contact.isFavorite ? 'round-image-favorite' : 'round-image'}  src={logo}></img>
            <label>{contact.firstName}</label>
            <span>{contact.email}</span>
            <hr className="linea-divisoria"></hr>
            <Button text={button.text} type={button.type} onClick={button.onClick} icon={button.icon} iconImage={button.iconImage}></Button>
        </div>
    )
}

export default Contact;