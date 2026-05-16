
import React, { useRef } from "react";
const initialData = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Bob", age: 28 },
  { id: 4, name: "Emma", age: 22 },
  { id: 5, name: "Michael", age: 35 },
  { id: 6, name: "Sophia", age: 27 },
];

const Tables=()=>{
   let data=useRef()
   function handleChange(){

   }
   function handleClick()
   {
    

   }
    return(<>

    
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            </tr>
        </thead>
     <tbody>
      { initialData.map((row,ind)=> 
            <tr key={row.id}>
                <td>{row.id}</td>
                <td><input type="text"  value={row.name} onChange={(e)=>handleChange()}/></td>
                <td><input type="number" value={row.age} onChange={(e)=>handleChange()}  /> </td>
            </tr>  ) }
            
        </tbody>

    </table>
    <button onClick={handleClick}>Save Changes</button>
    </>
    )
}

//export default Tables;