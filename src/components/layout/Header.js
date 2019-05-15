import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

 const Header = (props) => {
   const { branding } = props;
  return (
    // <div>
    //   <h1 style={{color: 'red', fontSize: '50px'}}>{branding}</h1>
    //   <h1 style={headingStyle}>{branding}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav pull-right">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question"></i> About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus"></i> Contact Add
            </Link>
          </li>
        </ul>
      </div>   
    </nav>
  )
}

Header.defaultProps = {
  branding: 'MyApp'
}
 Header.propTypes = {
   branding: PropTypes.string.isRequired
 }

//  const headingStyle = {
//   color: 'red', 
//   fontSize: '50px'
//  }

export default Header;