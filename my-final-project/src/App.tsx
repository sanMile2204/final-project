import './App.css';
import { Outlet } from "react-router-dom";
import Menu from './components/Menu/Menu';
import ContactListForm from './components/Contact-list/ContactListForm';
import { useEffect, useState } from 'react';
import { ContactData, fetchDataFromApi } from './store/features/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, addDispatch } from './store/store';
import Spinner from './components/Spinner/Spinner';


function App() {
  const [showContact, setShowContact] = useState(false);
  const dispatch: addDispatch  = useDispatch();
  const [loading, setLoading] = useState(true);
  const contactList: ContactData[] = useSelector(
    (state: RootState) => state.contacts.contacts
  );

  useEffect(() => {
    dispatch(fetchDataFromApi());
    console.log(loading);
  }, [dispatch]);

  useEffect(() => {
    if (contactList.length > 0) {
      setLoading(false);
    }
  }, [contactList]);

  return (
    <>
    <Menu onClick={() => { setShowContact(!showContact);}}></Menu>
    {
      showContact && !loading? <div className='main-container'><ContactListForm></ContactListForm></div> : null
    }
    <main className='main'>
      {
        loading ? <Spinner></Spinner> : <Outlet/>
      }
      
    </main>
    </>
  )
}

export default App
