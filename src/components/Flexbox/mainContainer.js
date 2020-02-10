import React, { Component } from 'react';

import TabPanel from './tabPanel';

class MainContainer extends Component {
    render(){
        return(
            <div className="sub-container" >
                <h1 className="section-heading">Lifecycle Management</h1>
                <div className="tab-container">
                    <TabPanel />
                </div>
            </div>
        )
    }
}
export default MainContainer