import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      light: "light",
      text: "text-light",
      modes: "EnabeledDarkMode"

    }
  
  }

  mode = () => {
    console.log("dark mode")
    if (this.state.light === "light") {
      this.setState({
        light: "dark",
        text: "text-light",
        modes: "EnabeledLightMode",

      })
      document.body.style.backgroundColor = "#0a1621";
      // document.body.style.color = "white";

    }
    else {
      this.setState({
        light: "light",
        text: "text-dark",
        modes: "EnabeledDarkMode"
      })
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
    }

  }
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.state.light} bg-${this.state.light} fixed-top`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">NewsKing</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link text-capitalize" to="/general">general</Link> </li>
                <li className="nav-item"><Link className="nav-link text-capitalize" to="/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link text-capitalize" to="/entertainment">entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link text-capitalize" to="/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link text-capitalize" to="/science">science</Link></li>
                <li className="nav-item"><Link className="nav-link text-capitalize" to="/sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link text-capitalize" to="/technology">technology</Link></li>



              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onClick={this.mode} id="flexSwitchCheckDefault" />
            
          </div>
        </nav>
      </div>
    )
  }
}
