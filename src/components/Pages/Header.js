import React from 'react'
import './Project.css'
 
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                <h2>My Projects</h2>
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="https://wpwebinfotech.com"><h2>Project Management App</h2></a>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Header;