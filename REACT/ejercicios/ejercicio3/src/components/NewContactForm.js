import { useState } from "react";

export default function NewContactForm({ setContacts }) {

  /*   const [name, setName] = useState(""); //no borrar
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhonerNumber] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
  
    function handleName(e) {
      setName(e.target.value);
    };
  
    function handleLastName(e) {
      setLastName(e.target.value);
    };
  
    function handlePhoneNumber(e) {
      setPhonerNumber(e.target.value);
    };
  
    function handleAddress(e) {
      setAddress(e.target.value);
    };
  
    function handlePostalCode(e) {
      setPostalCode(e.target.value);
    };
  
    function handleCity(e) {
      setCity(e.target.value);
    }; */

  const initialState = {
    name: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    city: "",
  };

  const [form, setForm] = useState(initialState);

  function handleInput(e) {
    const inputName = e.target.id;
    const newValue = e.target.value;

    setForm({ ...form, ...{[inputName]: newValue} })
  }

  //const handleInput = e => setForm({ ...form, ...{ [e.target.name]: e.target.value } })

  //useState [form, setForm] = useState({})

  function submit(e) {
    e.preventDefault()

    const newContact = {
      name: form.name,
      lastname: form.lastName,
      address: form.address,
      postalCode: form.postalCode,
      city: form.city,
      phoneNumber: form.phoneNumber

    };


    //const newContact = {name, lastName, address, postalCode, city, phoneNumber}; 

    //setContacts([...contacts, newContact]) //Necesitaria recibir "contacts"
    setContacts(currentContacts => [...currentContacts, newContact]);

    //e.target.reset(); 
    setForm(initialState);//reiniciamos el formulario
    //setName("");
    //setLastName("");
    //setAddress("");
    //setCity("");
    //setPostalCode("");
    //setPhoneNumber("");
  }


  return (
    <form className="form-group" onSubmit={submit}>

      <input id="name"        value={form.name}           onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce le nombre" />
      <input id="lastName"    value={form.lastName}       onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce los apellidos" />
      <input id="phoneNumber" value={form.phoneNumber}    onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el telefono" />
      <input id="address"     value={form.address}        onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la direccion" />
      <input id="postalCode"  value={form.postalCode}     onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el codigo postal " />
      <input id="city"        value={form.city}           onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la ciudad" />
      <input type="submit" className="btn btn-success" value="Registrar" />
    </form>

  )
}
