import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { v4 as uuidv4} from 'uuid';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import ConfirmDelete from './components/ConfirmDelete';
import EditContacts from './components/EditContacts';
import api from './api/contacts';

function App(props) {

  //const LOCAL_STORAGE_KEY = "contacts";
  //const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const [contacts, setContacts] = useState([]);

  // Retrieve Contacts
  const  retrieveDbContacts = async () =>{
    const response = await api.get("/contacts");
    return response.data;
  }

   useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveDbContacts();
      if(allContacts){
        setContacts(allContacts)
      }
    }
    getAllContacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const updateContactHandler = () =>{}

  return (
    <div className="">
      <Router>
        <Header />

        <Routes>
          <Route path="/add" component={AddContact} element={<AddContact addContactHandler={addContactHandler} />} />

          <Route path="/" component={ContactList} element={<ContactList contacts={contacts}  />} />

          <Route path="/contact/:id" component={ContactDetail} element={<ContactDetail />} />

          <Route path="/confirm" component={ConfirmDelete} element={<ConfirmDelete getContactId={removeContactHandler} />} />

          <Route path="/edit" component={EditContacts} element={<EditContacts updateContactHandler={updateContactHandler} />} />
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;