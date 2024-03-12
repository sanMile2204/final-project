import './App.css';
import { Outlet } from "react-router-dom";
import Menu from './components/Menu/Menu';
import ContactListForm from './components/Contact-list/ContactListForm';
import { useState } from 'react';

function App() {
  const [showContact, setShowContact] = useState(false);

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
