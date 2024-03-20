import { useState } from "react";
import Button from "../Button/Button";
import './Contact.css';
import { addDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { ContactData, addContact } from "../../store/features/ContactSlice";
import { initialFormData } from "./ContactProps";
import { isText, isValid, isValidEmail } from "./validations";


export default function ContactListForm() {
    const dispatch: addDispatch  = useDispatch();
    const [formData, setFormData] = useState<ContactData>(initialFormData);
    const [postError, setPostError] = useState('');

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState: any) => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));        
      };
    
    const handleSubmit = async(e: any) => {
        e.preventDefault();

        if (!isValid(formData)) {
          setPostError('Please fill in all required fields.');
          return;
        } else if ((!isText(formData.firstName)) || (!isText(formData.lastName))) {
          setPostError('Please enter just text.');
          return;
        } else if (!isValidEmail(formData.email)) {
          setPostError('Please enter a valid email address.');
          return;
        }

        const newContact: ContactData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          isFavorite: formData.isFavorite,
          id: formData.id,
          avatar: 'src/assets/Logo.png'
        };
        dispatch(addContact(newContact));
        setPostError('Add Contact succesfully');
        setFormData(initialFormData);
      };

    return (
        <section className="container">
            <form className="container-form" onSubmit={handleSubmit}>
            {
              postError ? <p className="saveMessage"> {postError}</p> : null
            }
                <input
                type="text" 
                placeholder="First name" 
                autoComplete='off'
                onChange={handleChange}
                value={formData.firstName}
                name="firstName"/>

                <input
                type="text" 
                placeholder="Last name" 
                autoComplete='off'
                onChange={handleChange}
                value={formData.lastName}
                name="lastName"/>

                <input 
                type="text"
                placeholder="Email" 
                name="email" 
                onChange={handleChange}
                value={formData.email}
                autoComplete='off'/>

                <div className="container-favorite">
                <label>Enable like favorite</label>
                <input 
                type="checkbox" 
                id="favorite" 
                name="isFavorite"
                onChange={handleChange}
                checked={formData.isFavorite}/>
                </div>
                <Button text={"SAVE"} type={"submit"}></Button>
            </form>
        </section>
    );
}