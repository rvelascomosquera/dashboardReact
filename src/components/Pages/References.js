import React from "react";
import Formulario from "../References/Formulario";
import ListaReferencias from "../References/ListaReferencias";
import './References.css'

const References = () => {
  return (  
    <div className="page__references">
      <h1>Mis Referencias</h1>
      <Formulario />
      <ListaReferencias />
    </div>
  );
}
 
export default References;