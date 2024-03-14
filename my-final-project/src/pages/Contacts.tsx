import { useContext, useState } from 'react';
import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import Pagination from '../components/Pagination/Pagination';
import  ButtonProps from '../models/ButtonsProps';
import { userContext } from '../App';

export default function Contacts() {

  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const {contactList, setContactList} = useContext(userContext);

  const handleClickHeartButton = (e: any) => {
    const id = e.currentTarget.id;

    const contactListCopy = contactList.map(contact => {
      if(contact.id === Number(id)) {
        return {...contact, isFavorite: true}
      }
      return contact;
    });
    setContactList(contactListCopy);
   }

   const handleClickDeleteButton = (e: any) => {
    const id = e.currentTarget.id;

    const contactListCopy = contactList.map(contact => {
      if(contact.id === Number(id)) {
        return {...contact, isFavorite: false}
      }
      return contact;
    });
    setContactList(contactListCopy);
   }

   const handleClickRemoveButton = (e: any) => {
    const id = e.currentTarget.id;
    const contactListCopy = contactList.filter(contact => contact.id !== Number(id));
    setContactList(contactListCopy);
   }


  const favoriteButtons: ButtonProps[] = [{
    iconImage: "/src/assets/heart.svg",
    type: "button",
    onClick: handleClickHeartButton,
    applyGreenColor: true
  },  
  {
    iconImage: "/src/assets/delete.svg",
    type: "button",
    onClick: handleClickRemoveButton,
    applyGreenColor: false
  }];

  const generalButtons: ButtonProps[] = [ 
  {
    iconImage: "/src/assets/delete-button.svg",
    type: "button",
    onClick: handleClickDeleteButton,
    applyGreenColor: false
  }, 
  {
    iconImage: "/src/assets/delete.svg",
    type: "button",
    onClick: handleClickRemoveButton,
    applyGreenColor: false
  }];

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
                        contactList.map((contact, index) => (
                            <Contact contact={contact} buttons={contact.isFavorite ? generalButtons : favoriteButtons} key={index}></Contact>
                        ))
                    }
                </div> 
            </section>
            </main>
            <footer>
                <Pagination postsPerPage={postsPerPage} length={contactList.length} onPageChange={handlePageChange}></Pagination>
            </footer>
        </section>
    )
}