import React,  { Component }  from 'react'
import './NavBar.css'

class NavBar extends Component {
    render() {
      return (
          <nav className="navbar navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="./index.html">Logo</a>
          </nav>
      );
    }
  }
   
  export default NavBar;