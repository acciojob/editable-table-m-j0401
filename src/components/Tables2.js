
import React, { useRef, useState } from "react";

const initialData = [
  { id:1, name: "Ram", age: 25 },
  { id: 2, name: "Shyam", age: 30 },
  { id: 3, name: "Ali", age: 35 },
  { id: 4, name: "Shaw", age: 20 },
  { id: 5, name: "Tavneet", age: 50 },
  { id: 6, name: "Lakshmi", age: 40 },
];

const Tables2 = () => {
  // State for rendering updated table
  const [rows, setRows] = useState(initialData);

  // Ref for storing edited rows
  const editedRows = useRef({});

  function handleChange(id, field, value) {
    // Update UI
    const updatedRows = rows.map((row) =>
      row.id === id
        ? {
            ...row,
            [field]:
              field === "age" ? Number(value) : value,
          }
        : row
    );

    setRows(updatedRows);

    // Store edited row in ref
    const updatedRow = updatedRows.find(
      (row) => row.id === id
    );

    editedRows.current[id] = updatedRow;
  }

  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log(
  //     "Edited rows:",
  //     Object.values(editedRows.current)
  //   );
  // }   
  function handleClick(e) {
  e.preventDefault();

  const edited = Object.values(editedRows.current).map(
    (row) => ({
      ...row,
      age: Number(row.age),
    })
  );

  console.log("Edited rows:", edited);
}

  return (
    <>
    <form>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            
            <tr key={row.id}>
              <td>{row.id}</td>

              <td>
                
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) =>
                    handleChange(
                      row.id,
                      "name",
                      e.target.value
                    )
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={row.age}
                  onChange={(e) =>
                    handleChange(
                      row.id,
                      "age",
                      e.target.value
                    )
                  }
                  
                />
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      

      <br />

      <button onClick={handleClick}>
        Save Changes
      </button>
      </form>
    </>
  );
};

export default Tables2;