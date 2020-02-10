import React, { Component } from 'react';

import TabContentFirstSection from './tabContentFirstSection';

class Tabs extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            activeTabIndex: 1
        };
    }

    handleTabClick = (tabIndex) => {
        this.setState({
            activeTabIndex : tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
        });
    }

    renderChildrenTabs = () =>{
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    renderActiveTabContent = () => {
        const { children } = this.props;
        const { activeTabIndex } = this.state;
        if(children[activeTabIndex]){
            return children[activeTabIndex].props.children;
        }
    }

    render(){
        return(
            <div className="tabs">
                <nav className="tab-nav">
                    {this.renderChildrenTabs()}
                </nav>
                <div className="tab-nav-body">
                    <TabContentFirstSection />
                    
                    {this.renderActiveTabContent()}
                </div>
            </div>    
        )
    }
}

export default Tabs