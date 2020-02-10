import React, { Component } from 'react';

import Tabs from './tabs';
import Tab from './tab';
import MyIssuancesTable from './myIssuancesTable';

class TabPanel extends Component {
    render(){
        return(
            <Tabs>
                <Tab 
                    tabName={'All Issuances'}
                    linkClassName={'custom-link'}>
                    <h4>This tab is Empty</h4>
                </Tab>
                <Tab 
                    tabName={'My Issuances'}
                    linkClassName={'custom-link'}>
                    
                    <MyIssuancesTable />
                </Tab>
                <Tab 
                    tabName={'Pending Issuances'}
                    linkClassName={'custom-link'}>
                    <h4>This tab is Empty</h4>
                </Tab>
                <Tab 
                    tabName={'MNDA Management'}
                    linkClassName={'custom-link'}>
                        <h4>This tab is Empty</h4>
                </Tab>
          </Tabs>
        )
    }
}
export default TabPanel