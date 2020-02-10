import React from 'react';

import Search from '../../assets/search.svg';
import Filter from '../../assets/filter.svg';
import Plus from '../../assets/plus.svg';

const TabContentFirstSection = () => {
    return(
        <div className="first-row">
            <form className="search-box">
                <input type="text" name="search" className="search no-focus" placeholder="Search for issuance name" />
                <button className="search-btn no-focus"><img src={Search} alt="Search for issuance name" className="search-icon" /></button>
            </form>

            <div className="filter-add-btn">
                <button className="buttons-alignment no-focus filter">
                    Filters <img src={Filter} alt="filter" className="filter-img" />
                </button> 
                <button className="buttons-alignment no-focus add">
                    <img src={Plus} alt="Plus" className="plus-img" /> Add Deal
                </button> 
            </div>
        </div>
    )
}

export default TabContentFirstSection