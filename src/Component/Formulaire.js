import React,{useState} from "react";
import './Form.css';
import ToDo from "./ToDoList";

const AddToDo=({name})=>{

const [Ajout,Fonction]=useState('')

const handleTo=(e)=>{
    e.preventDefault();
    console.log('ok')
    name(Ajout)
   
}



    return(
        <div>
            <form onSubmit={handleTo} >
                <label for='Add'  >Ajouter ToDo</label>
                <input id='Add' value={Ajout} onChange={(e=>Fonction(e.target.value))} type="text"/>
                <input  id='Envoyer' type="submit" value= 'Envoyer' />
                

            </form>
        </div>
    )

}

export default AddToDo;