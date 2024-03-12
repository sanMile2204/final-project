import { useState } from 'react';
import divider from '../assets/divider.png';
import Contact from '../components/Contact-list/Contact';
import Pagination from '../components/Pagination/Pagination';
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
}]

const favoriteButtons: ButtonProps[] = [{
    iconImage: "/src/assets/heart.svg",
    type: "button",
    onClick: () => ({}),
    applyGreenColor: true
  },  
  {
    iconImage: "/src/assets/delete.svg",
    type: "button",
    onClick: () => ({}),
    applyGreenColor: false
  }];

  const generalButtons: ButtonProps[] = [ 
  {
    iconImage: "/src/assets/delete-button.svg",
    type: "button",
    onClick: () => ({}),
    applyGreenColor: false
  }, 
  {
    iconImage: "/src/assets/delete.svg",
    type: "button",
    onClick: () => ({}),
    applyGreenColor: false
  }];

export default function Contacts() {

    
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

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
                        test.map((contact, index) => (
                            <Contact contact={contact} buttons={contact.isFavorite ? favoriteButtons : generalButtons} key={index}></Contact>
                        ))
                    }
                </div> 
            </section>
            </main>
            <footer>
                <Pagination postsPerPage={postsPerPage} length={test.length} onPageChange={handlePageChange}></Pagination>
            </footer>
        </section>
    )
}