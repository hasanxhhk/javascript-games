import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'}`}
      style={{
        backgroundColor: props.mode==='light' ? '#CCD5AE':
                         props.mode==='red'? '#800000' :
                         props.mode==='blue'? '#0B192C':'#3C3D37',
        color: (props.mode==='dark'||props.mode==='red'|| props.mode==='blue') ? 'white' : 'black'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
          {/* style={{backgroundColor:'red'}} */}
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toDarkMode} type="checkbox" role="switch" id="dark"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
          <div className={`form-check form-switch text-${props.mode === 'light'||'dark' ? 'red' : 'light'}`}>
            <input className="form-check-input" onClick={props.toRedMode} type="checkbox" role="switch" id="red"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="blue"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div> */}
        <div className={`form-check form-check-inline  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input"onClick={props.toLightMode} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4/" checked={props.mode==='light'}/>
            <label className="form-check-label" htmlFor="inlineRadio4">Light Mode</label>
          </div>
        <div className={`form-check form-check-inline  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toDarkMode} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label" htmlFor="inlineRadio1">Dark Mode</label>
          </div>
          <div className={`form-check form-check-inline  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input"onClick={props.toRedMode} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" htmlFor="inlineRadio2">Red Mode</label>
          </div>
          <div className={`form-check form-check-inline  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input"onClick={props.toBlueMode} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3">Blue Mode</label>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title : PropTypes.string,
  home : PropTypes.string
}
Navbar.defaultProps = {
  title : "Default nav",
  home : "default home"
}
