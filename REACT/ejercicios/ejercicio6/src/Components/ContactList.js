import {useContext} from "react"
import { GlobalContext } from "../App"

export default function ContactList() {

  const {contacts,setContacts} = useContext(GlobalContext);

  const removeContact = phoneNumber => {
    return () => setContacts(contacts.filter(contact => contact.phoneNumber !== phoneNumber))
  }

  return (
    <div className="row">
      {contacts.map((contact, index) => {
        return (
          <ul class="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contact.phoneNumber}>
            <li class="list-group-item active">Contacto {index + 1}</li>
            <li class="list-group-item">{contact.name}</li>
            <li class="list-group-item">{contact.lastName}</li>
            <li class="list-group-item">{contact.phoneNumber}</li>
            <li class="list-group-item">{contact.address}, {contact.postalCode}, {contact.city}</li>
            <li class="list-group-item">
              <button className="btn btn-warning" onClick={removeContact(contact.phoneNumber)}>Eliminar</button>
            </li>
          </ul>
        );

      })};
    </div>
  )
}