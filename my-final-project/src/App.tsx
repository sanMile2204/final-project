import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Overview from './pages/Overview';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import Menu from './components/Menu/Menu';
import ContactListForm from './components/Contact-list/ContactListForm';
import { useState } from 'react';

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
    <Menu onClick={() => { setShowContact(!showContact);}}></Menu>
    {
      showContact ? <ContactListForm></ContactListForm> : null
    }
    <Router>     
      <Routes>
          <Route path="/overview" element={<Overview/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
          <Route path="/" element={<Overview/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
