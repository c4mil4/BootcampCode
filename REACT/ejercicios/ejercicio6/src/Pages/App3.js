import ContactList from '../Components/ContactList';
import NewContactForm from '../Components/NewContactForm';

function App() {
  return (
    <div className="container">

      <h2 className="my-4">Agenda</h2>
      <ContactList />

      <h2 className="my-4">Nuevo contacto</h2>
      <NewContactForm  />
    </div>
  );
}

export default App;