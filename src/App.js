import CaseContainer from "./Components/CaseContainer/CaseContainer";
import ClientsContainer from "./Components/ClientsContainer/ClientsContainer";

import "./App.css";
import ContactContainer from "./Components/ContactContainer/ContactContainer";
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <CaseContainer className="app__case-container" />
      <ClientsContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
