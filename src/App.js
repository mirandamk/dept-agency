import { BrowserRouter as Router } from "react-router-dom";
import CaseContainer from "./Components/CaseContainer/CaseContainer";
import ClientsContainer from "./Components/ClientsContainer/ClientsContainer";
import ContactContainer from "./Components/ContactContainer/ContactContainer";
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <CaseContainer/>
        <ClientsContainer />
        <ContactContainer /> 
      </Router>
    </div>
  );
}

export default App;
