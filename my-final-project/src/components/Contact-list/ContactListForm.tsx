import { useState } from "react";
import Button from "../Button/Button";
import './Contact.css';
import { ContactData } from "../../models/ContactProps";

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    isFavorite: false,
    id: 0
  };

export default function ContactListForm() {
    const [formData, setFormData] = useState<ContactData>(initialFormData);

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
    const handleSubmit = async(e: any) => {
        e.preventDefault();
        console.log(formData);
      };

    return (
        <section className="container">
            <form className="container-form" onSubmit={handleSubmit}>
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
                <Button text={"SAVE"} type={"submit"} onClick={() => console.log("click save")}></Button>
            </form>
        </section>
    );
}