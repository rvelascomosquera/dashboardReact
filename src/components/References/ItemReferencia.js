import React, {useState} from "react";
import db from "../Firebase/FirebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import './ItemReferencia.css'
import Formulario from "./Formulario";

const ItemReferencia = ({ initData }) => {

  const [editar, setEditar] = useState(false);

  const deleteReferences = async(id) => {
    try {
      await deleteDoc(doc(db, 'Referencias', id))
    } catch (error) {
      console.log(error)
    }
  }

  return ( 
    <>
    {editar ?
      <Formulario 
        initData={initData}
        key={initData.id}
        finishEdit={() => setEditar(false) }
      />
    :
    <div className="card__reference">
      <h3 className="card__title"> Referencia </h3>
      <h4 className="card__person"> {initData.nombre}</h4>
      <p>Cargo: <span>{initData.cargo}</span> </p>
      <p>Empresa: <span>{initData.empresa}</span> </p>
      <p>Ciudad: <span>{initData.ciudad}</span></p>
      <p>Direccion: <span>{initData.direccion}</span></p>
      <div>
        <p className="info">Informacion de Contacto</p>
        <p>Correo: <span className="info__correo">{initData.email}</span></p>
        <p>Telefono: <span>{initData.celular}</span></p>
      </div>
      <div className="card__button">
        <button onClick={() => setEditar(true) } >Editar</button>
        <button onClick={() => deleteReferences(initData.id) } type="submit">Eliminar</button>
      </div>
    </div>
    }
    </>
  );
}
 
export default ItemReferencia;