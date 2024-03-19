import './App.css';
import { Outlet } from "react-router-dom";
import Menu from './components/Menu/Menu';
import ContactListForm from './components/Contact-list/ContactListForm';
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from './store/features/ContactSlice';
import { useDispatch } from 'react-redux';
import { addDispatch } from './store/store';


function App() {
  const [showContact, setShowContact] = useState(false);
  const dispatch: addDispatch  = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromApi());
  }, [dispatch]);

  return (
    <>
    <Menu onClick={() => { setShowContact(!showContact);}}></Menu>
    {
      showContact ? <div className='main-container'><ContactListForm></ContactListForm></div> : null
    }
    <main className='main'>
      <Outlet/>
    </main>
    </>
  )
}

export default App
