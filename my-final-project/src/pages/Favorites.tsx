import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import  ButtonProps from '../models/ButtonsProps';

interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    isFavorite: boolean;
  };

const test: ContactData[] = [{
    firstName: 'Sandra Milena',
    lastName: 'Gomez Poveda',
    email: 'sandra2test.com',
    isFavorite: true
}, 
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra2test.com',
    isFavorite: false
},
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra2test.com',
    isFavorite: false
},
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra2test.com',
    isFavorite: false
}
,
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra2test.com',
    isFavorite: false
}
,
{
    firstName: 'Sandra Milena2',
    lastName: 'Gomez Poveda2',
    email: 'sandra2test.com',
    isFavorite: false
}]

const initializeButton: ButtonProps[] = [{
    icon: "X",
    text: "REMOVE",
    type: "button",
    onClick: () => ({}),
    applyGreenColor: false
  }];

export default function Favorites() {
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
                    test.filter(x => x.isFavorite).map(contact => (
                        <Contact contact={contact} buttons={initializeButton}></Contact>
                    ))
                }
            </div> 
        </section>
        </main>
        </section>
    )
}