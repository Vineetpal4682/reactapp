
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
   
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        {props.tname}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home {props.aboutext}</a>
           
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'} mx-3`}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggelMode}/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Change</label>
</div>
      </div>
    </div>    
  </nav>   
  )
}
Navbar.propTypes = {
  tname:PropTypes.string,
  aboutext: PropTypes.string
};

Navbar.defaultProps = {
  tname:'ok',
  aboutext: 'ABOUT US'
};
