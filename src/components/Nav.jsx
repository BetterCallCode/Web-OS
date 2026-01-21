import React from 'react'
import "./nav.scss"

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
            <div className="right"></div>
        </nav>
    </div>
  )
}

export default Nav
