import {useState} from "react";
import {useHistory} from "react-router-dom";

export default function Dashboard() {
    const  [userID, setUserID] = useState(1)

    const history = useHistory();//estamos guardando en la variable history todo lo que nos devuelva useHistory

    function handleClick() {
      //Queremos que nos lleve a /record/userID cuando se cumpla la funcion
      history.push($`/record/${userID}`); 
      
    }

    return(
      <div>
        <input type="text" onChange={e => setUserID(e.target.value)} value={userID}/>
        <button onClick={handleClick}>Ir al perfil del usuario {userID}</button>
      </div>
    )
    
}