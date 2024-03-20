import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import ButtonProps, { addFavoriteButton, removeFavoriteButton } from '../components/Button/ButtonsProps';
import { ContactData, markAsFavorite, removeAsFavorite } from '../store/features/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, addDispatch } from '../store/store';


export default function Overview() {

    //contact list
    const contactList: ContactData[] = useSelector(
        (state: RootState) => state.contacts.contacts
      );
    const dispatch: addDispatch  = useDispatch();

    //config buttons
    const handleAddFavoriteButton = (e: any) => {
        const id = e.currentTarget.id;
        dispatch(markAsFavorite(id));
    }

    const handleRemoveFavoriteButton = (e: any) => {
        const id = e.currentTarget.id;
        dispatch(removeAsFavorite(id));
    }

    addFavoriteButton.onClick = handleAddFavoriteButton;
    removeFavoriteButton.onClick = handleRemoveFavoriteButton;
    const initializeButtonContacts: ButtonProps[] = [addFavoriteButton];
    const initializeButtonFavorites: ButtonProps[] = [removeFavoriteButton];

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
                        contactList.filter(x => x.isFavorite).length == 0 ? <h2>There are no favorites</h2> : null
                    }
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