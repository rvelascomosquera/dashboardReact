import React, {useState} from "react";
import db from './../Firebase/FirebaseConfig'
import { collection, addDoc } from "firebase/firestore";

const Formulario = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [cargo, setCargo] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [direccion, setDireccion] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [celular, setCelular] = useState('')

  const onSubmitReferencia = async(e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'Referencias'),{
        nombre: nombre,
        email: email,
        cargo: cargo,
        empresa: empresa,
        direccion: direccion,
        ciudad: ciudad,
        celular: celular
      });
    } catch (error) {
      alert('error al guardar los datos')
      console.log(error)
    } 

    setNombre('');
    setEmail('');
    setCargo('');
    setEmpresa('');
    setDireccion('');
    setCiudad('');
    setCelular('');
  }

  return ( 
    <form action="" className="referencias" onSubmit={onSubmitReferencia}>
      <h3>Crea una Referencia</h3>
      <input
        type="text"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre" 
        required
      />
      <input
        type="text"
        name="cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
        placeholder="Cargo" 
      />
      <input
        type="text"
        name="Empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        placeholder="Empresa" 
      />
      <input
        type="text"
        name="Direccion"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        placeholder="Direccion" 
      />
      <input
        type="text"
        name="Ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        placeholder="Ciudad" 
        required
      />
      <input
        type="text"
        name="celular"
        value={celular}
        onChange={(e) => setCelular(e.target.value)}
        placeholder="Celular"
        required 
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo@correo.com" 
      />
      <button type="submit" >Agregar</button>
    </form>
   );
}
 
export default Formulario;