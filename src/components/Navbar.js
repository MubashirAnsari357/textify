import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutUs: PropTypes.string
}

Navbar.defaultProps = {
  title: "Your Title",
  aboutUs: "About-Us"
}
