import React, {Component} from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';

import FlexBox from '../../pages/Flexbox';
import CssGrid from '../../pages/CssGrid';

class Routing extends Component {
    render(){
        return(
            <>
                <Router>
                    <Switch>
                        <Redirect exact strict from="/" to="/flexbox-layout" />
                        <Route exact strict path={"/flexbox-layout"} component={FlexBox} />
                        <Route exact strict path={"/css-grid-layout"} component={CssGrid} />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Routing
