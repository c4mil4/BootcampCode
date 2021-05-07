import Footer from "./Components/Footer";
import Router from './Routers/Router';

function App() {
  return (
    <div className="d-flex flex-column vh-100">     
      
      <Router />
      <Footer />
    </div>
  );
}

export default App;

