import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
              <div className="container">
  <NavLink  className ="navbar-brand fw-bold fs-4" to ="#">Looku Collection</NavLink>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>

  <div className ="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className ="navbar-nav mx-auto">
      <li key="uniqueId1" className="nav-item active">
        <NavLink className ="nav-link active" to ="/">Home <span className ="sr-only">(current)</span></NavLink>
      </li>
      <li key="uniqueId2" className="nav-item">
        <NavLink className ="nav-link" to ="/about">about</NavLink>
      </li>
      <li key="uniqueId3" className="nav-item">
        <NavLink className="nav-link" to ="/products">Products</NavLink>
      </li>
      <li key="uniqueId4" className="nav-item">
        <NavLink className="nav-link" to ="/contacts">Contacts</NavLink>
      </li>

    </ul>
    <div className ="buttons">
      <NavLink to ="/login" className ="btn btn-outline-dark">
        <i className ="fa fa-sign-in me-1"></i> Log In</NavLink>
      <NavLink to ="/register" className ="btn btn-outline-dark ms-2">
        <i className ="fa fa-user-plus me-1"></i> Register</NavLink>
      <NavLink to ="/cart" className ="btn btn-outline-dark ms-2">
        <i className ="fa fa-shopping-cart me-1"></i> Cart({state})</NavLink>
    </div>
  </div>
  </div>
</nav>
</div>
      );
    }
    
    export default Navbar;

