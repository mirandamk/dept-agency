import React from "react";
import Clientlogos from "./ClientLogos/ClientLogos";
import ClientDescription from "./ClientsDescription/ClientDescription";

import "./ClientsContainer.css";

function ClientsContainer() {
  return (
    <div className="clients-container">
      <ClientDescription />
      <Clientlogos />
    </div>
  );
}

export default ClientsContainer;
