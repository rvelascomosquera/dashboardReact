import React, {useState} from "react";
import db from "../Firebase/FirebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import './ItemReferencia.css'


const ItemReferencia = ({id, nombre, email, cargo, empresa, direccion, ciudad, celular}) => {

  const [editar, setEditar] = useState(false);
  const [nombreUp, setUpNombre] = useState(nombre)
  const [emailUp, setUpEmail] = useState(email)
  const [cargoUp, setUpCargo] = useState(cargo)
  const [empresaUp, setUpEmpresa] = useState(empresa)
  const [direccionUp, setUpDireccion] = useState(direccion)
  const [ciudadUp, setUpCiudad] = useState(ciudad)
  const [celularUp, setUpCelular] = useState(celular)

  const updateReferences = async(e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, 'Referencias', id), {
        nombre: nombreUp,
        email: emailUp,
        cargo: cargoUp,
        empresa: empresaUp,
        direccion: direccionUp,
        ciudad: ciudadUp,
        celular: celularUp
      })
    } catch (error) {
      console.log(error)
    }
      setEditar(false)
  }

  const deleteReferences = async(id) => {
    try {
      await deleteDoc(doc(db, 'Referencias', id))
    } catch (error) {
      console.log(error)
    }
  }

  return ( 
    <>
    {editar?
      <form action="" className="item_reference" onSubmit={updateReferences} >
        <h3>Editar Referencia</h3>
        <input
          type="text"
          name="nombre"
          value={nombreUp}
          onChange={(e) => setUpNombre(e.target.value)}
          placeholder="Nombre" 
        />
        <input
          type="text"
          name="cargo"
          value={cargoUp}
          onChange={(e) => setUpCargo(e.target.value)}
          placeholder="Cargo" 
        />
        <input
          type="text"
          name="Empresa"
          value={empresaUp}
          onChange={(e) => setUpEmpresa(e.target.value)}
          placeholder="Empresa" 
        />
        <input
          type="text"
          name="Direccion"
          value={direccionUp}
          onChange={(e) => setUpDireccion(e.target.value)}
          placeholder="Direccion" 
        />
        <input
          type="text"
          name="Ciudad"
          value={ciudadUp}
          onChange={(e) => setUpCiudad(e.target.value)}
          placeholder="Ciudad" 
        />
        <input
          type="text"
          name="celular"
          value={celularUp}
          onChange={(e) => setUpCelular(e.target.value)}
          placeholder="Celular" 
        />
        <input
          type="email"
          name="email"
          value={emailUp}
          onChange={(e) => setUpEmail(e.target.value)}
          placeholder="Correo@correo.com" 
        />
        <button type="submit">Actualizar</button>
      </form>
    :
    <div className="card__reference">
      <h3 className="card__title"> Referencia </h3>
      <h4 className="card__person"> {nombre}</h4>
      <p>Cargo: <span>{cargo}</span> </p>
      <p>Empresa: <span>{empresa}</span> </p>
      <p>Ciudad: <span>{ciudad}</span></p>
      <p>Direccion: <span>{direccion}</span></p>
      <div>
        <p className="info">Informacion de Contacto</p>
        <p>Correo: <span className="info__correo">{email}</span></p>
        <p>Telefono: <span>{celular}</span></p>
      </div>
      <div className="card__button">
        <button onClick={() => setEditar(!editar) } >Editar</button>
        <button onClick={() => deleteReferences(id) } type="submit">Eliminar</button>
      </div>
      
    </div>
    }
    </>
  );
}
 
export default ItemReferencia;