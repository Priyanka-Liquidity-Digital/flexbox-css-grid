import React, {  Component } from 'react';

import caret from '../../assets/caret.svg';


class Header extends Component {
    render(){
        return(
            <>
                <header className="header">
                    <button className="login a-link">
                        Alan Lambert <img src={caret} alt="drop down" className="caret-img" />
                    </button>
                </header>
            </>
        )
    }
}

export default Header