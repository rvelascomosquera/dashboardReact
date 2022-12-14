import React, {useState, useEffect} from "react";
import db from "../Firebase/FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import ItemReferencia from "./ItemReferencia";
import './ListarReferencias.css'

const ListaReferencias = () => {

  const [refencia, setReferencia] = useState([]);
  
  useEffect(() => {
    onSnapshot(collection(db, 'Referencias'),

    (snapshot) => {
      const arregloReferencias = snapshot.docs.map((ref) => (
        {...ref.data(), id: ref.id}
      ))
      
      setReferencia(arregloReferencias);
    },

    (error) => {
      console.log(error)
    }

    );
  }, [])
  

  return ( 
    <div>
      {refencia.length > 0 &&
      <div className="list__reference">
        {refencia.map((newReferencia) => (
          <ItemReferencia 
          key={newReferencia.id}
          id={newReferencia.id}
          nombre={newReferencia.nombre}
          email={newReferencia.email}
          cargo={newReferencia.cargo}
          empresa={newReferencia.empresa}
          direccion={newReferencia.direccion}
          ciudad={newReferencia.ciudad}
          celular={newReferencia.celular}     
          />
        ))}
      </div>
      }
    </div>
   );
}
 
export default ListaReferencias;