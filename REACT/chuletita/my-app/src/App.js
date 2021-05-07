import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from "./components/FirstComponent";
import Counter from "./components/Counter";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";

import {useState, createContext} from "react";
import Router from './Router';

export const GlobalContext = createContext();

function App() {

  const [show,setShow] = useState(true);
  
  return (
    <div className="App">

    {/* {show && <UseEffectComponent />}
      <button onClick=() => setShow(!show)>Show</button>

      <Counter />

      <FirstComponent title="Titulo enviado desde el padre" date="16 de agosto de 2025"/>
      <FirstComponent title="Otro titulo"/>
      <SecondComponent />
      <ThirdComponent /> 
      <GlobalContext.Provider value="SOY UN STRING GUARDADO EN UN CONTEXTO">
        <UseContextComponent />
      </GlobalContext.Provider> */}
      <Route />
    </div>
  );
}

export default App;