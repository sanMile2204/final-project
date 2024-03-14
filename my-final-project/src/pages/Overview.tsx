import { useContext } from 'react';
import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import ButtonProps from '../models/ButtonsProps';
import { UserContext } from '../App';

const initializeButtonFavorites: ButtonProps[] = [{
    icon: "X",
    text: "REMOVE",
    type: "button",
    onClick: () => ({}),
    applyGreenColor: false
  }];

  const initializeButtonContacts: ButtonProps[] = [{
    iconImage: "/src/assets/heart.svg",
    type: "button",
    onClick: () => ({}),
    applyGreenColor: true
  }];

export default function Overview() {

    const {contactList, setContactList} = useContext(UserContext);

    return (
        <section className="full-container">
            <main>
                <section className='favorites'>
                <div className="title">
                    <h1>Favorites</h1>
                    <img src={divider} title="divider" className='divider'></img>
                </div>
                <div className='list-contact-container'>
                    {
                        contactList.filter(x => x.isFavorite).slice(0, 4).map(contact => (
                            <Contact contact={contact} buttons={initializeButtonFavorites} key={contact.email}></Contact>
                        ))
                    }
                </div>  
                </section>
                <section className='contact-list'>
                <div className="title">
                    <h1>Contact List</h1>
                    <img src={divider} title="divider" className='divider'></img>
                </div>
                <div className='list-contact-container'>
                    {
                        contactList.slice(0, 6).map(contact => (
                            <Contact contact={contact} buttons={initializeButtonContacts} key={contact.email}></Contact>
                        ))
                    }
                </div>  
                </section>               
            </main>
        </section>
    )
}