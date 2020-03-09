import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./product.json"; 
const table_data = data.product;

function App() {
  return (
    <div className="container">
      <h2>Horizontal form</h2>
      <form class="form-horizontal">
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Email:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Password:</label>
          <div class="col-sm-10">          
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
          </div>
        </div>
        <div class="form-group">        
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label><input type="checkbox" name="remember"/> Remember me</label>
            </div>
          </div>
        </div>
        <div class="form-group">        
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

function sayHello(data) {
  alert('Hello!'+data.count.name);
}

export default App;
