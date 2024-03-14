import { useContext } from 'react';
import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import  ButtonProps from '../models/ButtonsProps';
import { userContext } from '../App';

const initializeButton: ButtonProps[] = [{
    icon: "X",
    text: "REMOVE",
    type: "button",
    onClick: () => ({}),
    applyGreenColor: false
  }];

export default function Favorites() {
    const {contactList, setContactList} = useContext(userContext);
    
    return (
        <section className="full-container">
        <main>
        <section className="favorites">
            <div className="title">
                <h1>Favorites</h1>
                <img src={divider} title="divider" className='divider'></img>
            </div>
            <div className='list-contact-container'>
                {
                    contactList.filter(x => x.isFavorite).map((contact, index) => (
                        <Contact key={index} contact={contact} buttons={initializeButton}></Contact>
                    ))
                }
            </div> 
        </section>
        </main>
        </section>
    )
}