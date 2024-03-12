import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import ButtonProps from '../models/ButtonsProps';

interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    isFavorite: boolean;
  };

const test: ContactData[] = [{
    firstName: 'Sandra Milena',
    lastName: 'Gomez Poveda',
    email: 'sandra1test.com',
    isFavorite: true
}, 
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra9test.com',
    isFavorite: false
},
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra3test.com',
    isFavorite: false
},
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra4test.com',
    isFavorite: false
}
,
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra5test.com',
    isFavorite: false
}
,
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra6test.com',
    isFavorite: false
}]

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
                        test.slice(0, 4).map(contact => (
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
                        test.slice(0, 6).map(contact => (
                            <Contact contact={contact} buttons={initializeButtonContacts} key={contact.email}></Contact>
                        ))
                    }
                </div>  
                </section>               
            </main>
        </section>
    )
}