import React from 'react';

const Tab = (props) => {
    return(
            <button 
                className={`a-link tab-item ${props.linkClassName} ${props.isActive ? 'tab-active' : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    props.onClick(props.tabIndex);
                }}
            >
                {props.tabName}
            </button>
    )
}
export default Tab