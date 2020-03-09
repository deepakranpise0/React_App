import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import data from "./product.json";
const table_data = data.product;

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <table>
        <thead>
          <th>name</th>
          <th>pricingTier</th>
          <th>priceRange</th>
          <th>weight</th>
          <th>availability</th>
          <th>productUrl</th>
          <th>isEditable</th>
        </thead>
        <tbody>
          {table_data.map(s => (
            <tr>
              <td>{s.name}</td>
              <td>{s.pricingTier}</td>
              <td>{s.priceRange}</td>
              <td>{s.weight}</td>
              <td>{s.availability}</td>
              <td>{s.productUrl}</td>
              {s.isEditable}
              <td ><button onClick={() => <Link
                to={{
                  pathname: "/Editform",
                  data: data.count // your data array of objects
                }}
              ></Link>}>Edit</button></td>
            </tr>))}
        </tbody>
      </table>
      <ul>
      </ul>
    </div>
  );
}

function sayHello(data) {
  alert('Hello!' + data.count.name);

}

export default App;
