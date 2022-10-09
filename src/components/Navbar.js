// rfc
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse flex-row-reverse navbar-collapse" id="navbarSupportedContent">
          <div className={`form-check form-switch mx-2 text-${props.mode==='dark'?'white':'black'}`}>
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// PropTypes 
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.string
}

// Default PropTypes
Navbar.defaultProps = {
  title: "Set title here",
  contact: "Set contact here"
}