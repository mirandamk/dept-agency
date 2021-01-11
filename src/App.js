import CaseContainer from "./Components/CaseContainer/CaseContainer";
import ClientsContainer from "./Components/ClientsContainer/ClientsContainer";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import ContactContainer from "./Components/ContactContainer/ContactContainer";
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <CaseContainer className="app__case-container" />
        <ClientsContainer />
        <ContactContainer /> 
      </Router>
    </div>
  );
}

export default App;
