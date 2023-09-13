import React,{useState} from "react";
import AddToDo from "./Formulaire";
import './../Todo.css';

const ToDo=()=>{

    const[todos,SetTodos]=useState([
        {id:1,todo:'Acheter du lait'},
        {id:2,todo:'Acheter du pain'},
        {id:3,todo:'Acheter du sucre'}
    ])

    const Modificaton=(event)=>{
        SetTodos([...todos,{
            id: 4,
            todo:event,

        }
           
        ])
    
    }
    

    const Laliste= todos.map( liste=>{
        return(
            <p className="Todo" key={liste.id} >
                {liste.todo}  
            </p>
          )
        })
      

     return(
        <div>
            
            <h2> {Laliste} </h2>
            <h3> <AddToDo name={Modificaton} /> </h3>
        </div>
     )
}
export default ToDo;