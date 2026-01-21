import React from 'react'
import "./nav.scss"
import DataTime from './DataTime'

const Nav = () => {
  return (
    <div>
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./navbar-icons/apple.svg" alt="" />
                </div>

                <div className="nav-item">
                    <p>Divy Jain</p>
                </div>

                <div className="nav-item">
                    <p>File</p>
                </div>

                <div className="nav-item">
                    <p>Window</p>
                </div>

                <div className="nav-item">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="/navbar-icons/wifi.svg" alt="" />
                </div>

                <div className="nav-item">
                    <DataTime />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav
