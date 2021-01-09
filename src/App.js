import CaseContainer from "./Components/CaseContainer/CaseContainer";
import ClientsContainer from "./Components/ClientsContainer/ClientsContainer";

import "./App.css";
import ContactContainer from "./Components/ContactContainer/ContactContainer";

function App() {
  return (
    <div className="App">
    <p>Hi</p>
      <CaseContainer className='app__case-container' />
      <ClientsContainer />
      <ContactContainer/>
    </div>
  );
}

export default App;
