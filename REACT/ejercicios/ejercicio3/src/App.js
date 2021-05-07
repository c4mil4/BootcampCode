import { useState } from "react"; 
import './App.css';
import ContactList from './components/ContactList';
import NewContactForm from './components/NewContactForm';

function App() {

  const initialState = [
    {name:"federico", lastName:"garcia lorca", address:"calle x", city:"granada", postalCode: 27009, phoneNumber: 20894585222},
    {name:"Miguel", lastName:"Hernandez", address:"calle y", city:"madrid", postalCode: 272021, phoneNumber: 20154585222},
    {name:"Rafael", lastName:"Alberdi", address:"calle u", city:"cadiz", postalCode: 11203, phoneNumber: 20125685222},
  ];

  const [contacts, setContacts] = useState(initialState);
  
  return (
    <div className="container">

      <h2 className="my-4">Agenda</h2>
     <ContactList contacts={contacts} setContacts={setContacts}/>

     <h2 className="my-4" >Nuevo contacto</h2>
     <NewContactForm setContacts={setContacts}/>
     </div>
  );
}

export default App;