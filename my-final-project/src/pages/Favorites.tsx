import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import  ButtonProps, { removeFavoriteButton } from '../components/Button/ButtonsProps';
import { ContactData, removeAsFavorite } from '../store/features/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, addDispatch } from '../store/store';
import { useState } from 'react';
import Pagination from '../components/Pagination/Pagination';

export default function Favorites() {

    //pagination
    const postsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const total = postsPerPage * currentPage;
    const initial = total - postsPerPage;
    const final = total;

    //contact list
    const contactList: ContactData[] = useSelector(
        (state: RootState) => state.contacts.contacts
      );
    const dispatch: addDispatch  = useDispatch();

    //config buttons
    const handleRemoveFavoriteButton = (e: any) => {
        const id = e.currentTarget.id;
        dispatch(removeAsFavorite(id));
    }

    removeFavoriteButton.onClick = handleRemoveFavoriteButton;
    const initializeButton: ButtonProps[] = [removeFavoriteButton];

      const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
      };
    
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
                    contactList.filter(x => x.isFavorite).length > postsPerPage ?
                    contactList.slice(initial, final).filter(x => x.isFavorite).map((contact, index) => (
                        <Contact key={index} contact={contact} buttons={initializeButton}></Contact>
                    )) :
                    contactList.filter(x => x.isFavorite).map((contact, index) => (
                        <Contact key={index} contact={contact} buttons={initializeButton}></Contact>
                    ))
                }
            </div> 
        </section>
        </main>
        <footer>
              {
                contactList.filter(x => x.isFavorite).length > postsPerPage ? 
                <Pagination postsPerPage={postsPerPage} length={contactList.length} onPageChange={handlePageChange}></Pagination> :
                null
              }
                
            </footer>
        </section>
    )
}