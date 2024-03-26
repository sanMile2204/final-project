import { useState } from 'react';
import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import Pagination from '../components/Pagination/Pagination';
import  ButtonProps, { addFavoriteButton, deleteButton, removeButton } from '../components/Button/ButtonsProps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, addDispatch } from '../store/store';
import { ContactData, markAsFavorite, removeAsFavorite, removeContact } from '../store/features/ContactSlice';
import Modal from '../components/Modal/Modal';

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
  const pageItems = contactList.slice(initial, final);
  const [elementId, setElementId] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

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
      setElementId(id);
      setShowDialog(true);
   }

   addFavoriteButton.onClick = handleAddFavoriteButton;
   deleteButton.onClick = handleClickRemoveButton;
   removeButton.onClick = handleRemoveFavoriteButton;
  const favoriteButtons: ButtonProps[] = [addFavoriteButton, deleteButton];
  const generalButtons: ButtonProps[] = [removeButton, deleteButton];

 const handlePageChange = (pageNumber: number) => {
   setCurrentPage(pageNumber);
 };

 const ConfirmRemoveFavoriteButton = () => {
  dispatch(removeContact(elementId));
  const totalElements = Math.ceil((contactList.length -1) / postsPerPage);
    if (totalElements < currentPage) setCurrentPage(currentPage - 1);
    setShowDialog(false);
}

const CancelRemoveFavoriteButton = () => {
  setShowDialog(false);
}

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
                      pageItems.map((contact, index) => (
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
                <Pagination postsPerPage={postsPerPage} length={contactList.length} onPageChange={handlePageChange} currentPageExternal={currentPage}></Pagination> :
                null
              }
              {
                showDialog && (
                  <Modal onClickConfirm={ConfirmRemoveFavoriteButton} onClickCancel={CancelRemoveFavoriteButton} text='¿Are you sure want to delete this contact?'></Modal>
                )
              }
                
            </footer>
        </section>
    )
}