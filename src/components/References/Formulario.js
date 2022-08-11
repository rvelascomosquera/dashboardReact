import React, {useEffect, useState} from "react";
import db from './../Firebase/FirebaseConfig'
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";


const Formulario = ({ initData, finishEdit }) => {

  const initDataState = {
    nombre: '',
    email: '',
    cargo: '',
    empresa: '',
    direccion: '',
    ciudad: '',
    celular: ''
  }

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (initData) {
      setData(initData);
      setEditMode(true);
    }
  // eslint-disable-next-line
  }, []);

  const [data, setData] = useState(initDataState);

  const createReference = async() => {
    try {
      await addDoc(collection(db, 'Referencias'), data);
    } catch (error) {
      alert('error al guardar los datos')
      console.log(error)
    } 
    setData(initDataState);
  }

  const updateReference = async() => {
    try {
      await updateDoc(doc(db, 'Referencias', initData.id), data);
    } catch (error) {
      console.log(error)
    }
    finishEdit();
  }

  function onChange(e) {
    console.log(e);
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    if (editMode) {
      updateReference();
    } else {
      createReference();
    }
  }

  return ( 
    <form className="referencias" onSubmit={(e) => onSubmit(e)}>
      <h3>{ editMode ? 'Editar Referencia' : 'Crea una Referencia' }</h3>
      <input
        type="text"
        name="nombre"
        value={data.nombre}
        onChange={(e) => onChange(e)}
        placeholder="Nombre" 
        required
      />
      <input
        type="text"
        name="cargo"
        value={data.cargo}
        onChange={(e) => onChange(e)}
        placeholder="Cargo" 
      />
      <input
        type="text"
        name="empresa"
        value={data.empresa}
        onChange={(e) => onChange(e)}
        placeholder="Empresa" 
      />
      <input
        type="text"
        name="direccion"
        value={data.direccion}
        onChange={(e) => onChange(e)}
        placeholder="Direccion" 
      />
      <input
        type="text"
        name="ciudad"
        value={data.ciudad}
        onChange={(e) => onChange(e)}
        placeholder="Ciudad" 
        required
      />
      <input
        type="text"
        name="celular"
        value={data.celular}
        onChange={(e) => onChange(e)}
        placeholder="Celular"
        required 
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={(e) => onChange(e)}
        placeholder="Correo@correo.com" 
      />
    <button type="submit">{ editMode ? 'Editar' : 'Agregar' }</button>
    </form>
   );
}
 
export default Formulario;