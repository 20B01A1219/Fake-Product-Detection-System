import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom';
import Instructions from "./components/Instructions";
import ValidateProduct from "./components/ValidateProduct";
import AddsingleProduct from "./components/AddsingleProduct";
import Register from "./components/Register";
import Login from "./components/Login";
import Manufacturer from "./components/Manufacturer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/instructions" element = {<Instructions/>}/>
      <Route path = "/validateproduct" element = {<ValidateProduct/>}/>
      <Route path = '/singleproduct' element = {<AddsingleProduct/> } />
      <Route path = '/signup' element = {<Register/> } />
      <Route path = '/login' element = {<Login/> } />
      <Route path = '/manufacturer' element = {<Manufacturer/> } />
      
      </Routes>
    </div>
  );
}

export default App;
