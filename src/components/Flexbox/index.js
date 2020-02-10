import React, {Component} from 'react';

import Sidebar from './sidebar';
import Header from './header';
import MainContainer from './mainContainer';


class FlexboxMain extends Component {
    render(){
        return(
            <>
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div className="right-container">
                    <Header />
                    <MainContainer />
                </div>

            </>

            
        )
    }
}

export default FlexboxMain
