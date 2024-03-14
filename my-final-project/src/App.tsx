import './App.css';
import { Outlet } from "react-router-dom";
import Menu from './components/Menu/Menu';
import ContactListForm from './components/Contact-list/ContactListForm';
import { createContext, useEffect, useState } from 'react';
import { useGetUsers } from './hooks/useGetUsers';
import { ContactData } from './models/ContactProps';

export const UserContext = createContext<{ contactList: ContactData[]; setContactList: React.Dispatch<React.SetStateAction<ContactData[]>> }>({ contactList: [], setContactList: () => {} });
function App() {
  const [showContact, setShowContact] = useState(false);
  const {users, getUsers} = useGetUsers();
  const [contactList, setContactList] = useState<ContactData[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const newArray: ContactData[] = users.map(item => {
      return {
        email: item.email,
        firstName: item.first_name,
        lastName: item.last_name,
        avatar: item.avatar,
        isFavorite: false,
        id: item.id
      }
    });
    setContactList(newArray);
  }, [users]);

  return (
    <>
    <Menu onClick={() => { setShowContact(!showContact);}}></Menu>
    {
      showContact ? <div className='main-container'><ContactListForm></ContactListForm></div> : null
    }
    <main className='main'>
    <UserContext.Provider value={{contactList, setContactList}}>
      <Outlet/>
    </UserContext.Provider>
    </main>
    </>
  )
}

export default App
