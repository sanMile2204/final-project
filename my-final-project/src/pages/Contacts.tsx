import { useState } from 'react';
import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import Pagination from '../components/Pagination/Pagination';
import  ButtonProps, { addFavoriteButton, deleteButton, removeButton } from '../components/Button/ButtonsProps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, addDispatch } from '../store/store';
import { ContactData, markAsFavorite, removeAsFavorite, removeContact } from '../store/features/ContactSlice';

export default function Contacts() {

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
  const handleAddFavoriteButton = (e: any) => {
    const id = e.currentTarget.id;
    dispatch(markAsFavorite(id));
   }

   const handleRemoveFavoriteButton = (e: any) => {
    const id = e.currentTarget.id;
    dispatch(removeAsFavorite(id));
   }

   const handleClickRemoveButton = (e: any) => {
    const id = e.currentTarget.id;
    dispatch(removeContact(id));
   }

   addFavoriteButton.onClick = handleAddFavoriteButton;
   deleteButton.onClick = handleClickRemoveButton;
   removeButton.onClick = handleRemoveFavoriteButton;
  const favoriteButtons: ButtonProps[] = [addFavoriteButton, deleteButton];
  const generalButtons: ButtonProps[] = [removeButton, deleteButton];

 const handlePageChange = (pageNumber: number) => {
   setCurrentPage(pageNumber);
 };

    return (
        <section className="full-container">
            <main>
            <section className="contacts">
                <div className="title">
                    <h1>Contact List</h1>
                    <img src={divider} title="divider" className='divider'></img>
                </div>
                <div className='list-contact-container'>
                    {
                      contactList.length > postsPerPage ?
                        contactList.slice(initial, final).map((contact, index) => (
                            <Contact contact={contact} buttons={contact.isFavorite ? generalButtons : favoriteButtons} key={index}></Contact>
                        )) :
                        contactList.map((contact, index) => (
                          <Contact contact={contact} buttons={contact.isFavorite ? generalButtons : favoriteButtons} key={index}></Contact>
                      ))
                    }
                </div> 
            </section>
            </main>
            <footer>
              {
                contactList.length > postsPerPage ? 
                <Pagination postsPerPage={postsPerPage} length={contactList.length} onPageChange={handlePageChange}></Pagination> :
                null
              }
                
            </footer>
        </section>
    )
}