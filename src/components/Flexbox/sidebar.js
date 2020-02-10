import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/liquidity-logo.png';

class Sidebar extends Component {
    render(){
        return(
            <>
                <div className="logo-container">
                    <img src={Logo} alt="Liquidity Digital Logo" className="logo" />
                </div>

                <nav className="sidebar-menu">
                   <NavLink 
                        to="/flexbox-layout" 
                        activeClassName="sidebar-active" 
                        className="menu-item"
                    >
                            Lifecycle Management
                    </NavLink>

                    <NavLink 
                        to="/css-grid-layout" 
                        activeClassName="sidebar-active" 
                        className="menu-item"
                    >
                        User Management
                    </NavLink>

                   <NavLink 
                        to="/css-grid-layout" 
                        activeClassName="sidebar-active" 
                        className="menu-item"
                    >
                        Reporting
                    </NavLink>
                </nav>
            
                <footer className="sidebar-footer">
                    <p>
                        Contact us if you have questions:
                    </p>
                    <p>
                        <button className="a-link" href="#"> support@liquidity.digital</button>
                    </p>
                </footer>
            </>
        )
    }
}

export default Sidebar