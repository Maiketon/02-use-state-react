import React, {useState} from "react";

export const MiPrimerEstado = () =>
{
    //let nombre = "Miguel Angel Montoya Bautista";
    /*PROBLEMATICA, PARA ELLO USAMOS EL USE STATE */
   /* const cambiarNombre = e => {
        
        nombre = "Paquito Hernandez";


    };*/
     const [nombre,setNombre] = useState("Miguel Angel Montoya");
     

     const cambiarNombre = (e, nombreFijo) =>
     {
        setNombre(nombreFijo);
     };
    
    return(
        <>
        <div>
            <h3>Mi primer Estado</h3>
            
            <strong>
                {nombre}
            </strong>
                <button onClick={e => cambiarNombre(e,"Carlos Perez")}> Cambiar Nombre</button>
                 <input type="text" onChange={ (e) =>cambiarNombre(e,e.target.value) }></input>

        </div>
        </>
    );
}

export default MiPrimerEstado;