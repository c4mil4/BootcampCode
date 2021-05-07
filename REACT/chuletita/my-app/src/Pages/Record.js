import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Record() {

    const [userData, setUserData] = useState({});

    const params = useParams();//devuelve un objeto con parametros recibidos por URL, alternativa destructurada 
    const user = params.userID;

    const USER_URL = "https://reqres.in/api/users/"
    //useEffect(() => {
    //    fetch(`moviesDetails/${user}`)
    //}), [])

    useEffect(() => {
        fetch(`${USER_URL}${user}`)
        .then(response => response.json())
        .then(data => setUserData(data));
    }, [user]);

    return(
        <div>
          {/* record of {props.match.params.user} */}
          <h2>Record of {user}</h2>

          <ul>
              <li>{userData.data?.email}</li>
              <li>{userData.data?.first_name}</li>
              <li>{userData.data?.last_name}</li>
              <img src={userData.data?.avatar} alt="Profile" />
            </ul>
        </div>
    )
    
}