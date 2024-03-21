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
    const favoritesList = contactList.filter(x => x.isFavorite);

    //config buttons
    const handleRemoveFavoriteButton = (e: any) => {
        const id = e.currentTarget.id;
        dispatch(removeAsFavorite(id));
        const totalElements = Math.ceil((favoritesList.length -1) / postsPerPage);
        if (totalElements < currentPage) setCurrentPage(currentPage - 1);
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
                favoritesList.length == 0 ? <h2>There are no favorites</h2> : null
              }
                {
                    favoritesList.length > postsPerPage ?
                    favoritesList.slice(initial, final).map((contact, index) => (
                        <Contact key={index} contact={contact} buttons={initializeButton}></Contact>
                    )) :
                    favoritesList.map((contact, index) => (
                        <Contact key={index} contact={contact} buttons={initializeButton}></Contact>
                    ))
                }
            </div> 
        </section>
        </main>
        <footer>
              {
                favoritesList.length > postsPerPage ? 
                <Pagination postsPerPage={postsPerPage} length={favoritesList.length} onPageChange={handlePageChange} currentPageExternal={currentPage}></Pagination> :
                null
              }
                
            </footer>
        </section>
    )
}