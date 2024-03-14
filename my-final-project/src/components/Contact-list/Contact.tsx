import './Contact.css';
import logo from '../../assets/Logo.png';
import Button from '../Button/Button';
import { ContactProps } from '../../models/ContactProps';

const Contact: React.FC<ContactProps> = ({contact, buttons}) => {
    return (
        <div className='contact-container'>
            <img className={contact.isFavorite ? 'round-image-favorite' : 'round-image'}  src={contact.avatar ? contact.avatar : logo}></img>
            <label>{contact.firstName}</label>
            <span>{contact.email}</span>
            <hr className="linea-divisoria"></hr>
            <div className='button-container'>
            {
              buttons.map(
                (button, index) => (
                  <Button key={index} 
                  text={button.text} 
                  type={button.type} 
                  onClick={button.onClick} 
                  icon={button.icon} 
                  iconImage={button.iconImage} 
                  applyGreenColor={button.applyGreenColor}
                  id={contact.id}></Button>
              ))
            }
            </div>
        </div>
    )
}

export default Contact;