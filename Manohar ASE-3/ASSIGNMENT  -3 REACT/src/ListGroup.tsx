import { Fragment } from "raect";


function ListGroup() {
  let items= [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'paris'
  ];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p> No item found</p> : null}
       {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
      
        {items.map((item => 
        <li 
         className="list-group-item"
        key={item}
        onClick={() =>console.log(item)}
        >{item}
        </li>
      ))}
      </ul>
    </>
  );
}

export default ListGroup;
