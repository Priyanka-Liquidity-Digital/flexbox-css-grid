import React from 'react';

import CommonTablerow from './CommonTableRow';
import TableCaret from '../../assets/table-caret.svg';
import TableCaretSelected from '../../assets/table-caret-selected.svg';

const MyIssuanancesTable = () =>{
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Deals <img src={TableCaretSelected} alt="sort" className="table-caret" /></th>
                        <th>Industry <img src={TableCaret} alt="sort" className="table-caret" /></th>
                        <th>Deal Stage <img src={TableCaret} alt="sort" className="table-caret" /></th>
                        <th>Originator <img src={TableCaret} alt="sort" className="table-caret" /></th>
                        <th>Contact <img src={TableCaret} alt="sort" className="table-caret" /></th>
                        <th>RReps <img src={TableCaret} alt="sort" className="table-caret" /></th>
                        <th>Investors <img src={TableCaret} alt="sort" className="table-caret" /></th>
                        <th>Action <img src={TableCaret} alt="sort" className="table-caret" /></th>
                    </tr>
                </thead>
                <tbody>
                    <CommonTablerow 
                        deals="Prophecy Entertainment"
                        industry="Healthcare"
                        dealStage="Pitching"
                        originator="Red Rock"
                        originatorEmail="j.murphy@lead.com"
                        contact="Primary"
                        rReps="12"
                        investors="24"  
                    />
                  
                    <CommonTablerow 
                        deals="Omega Systems"
                        industry="Energy"
                        dealStage="Pitching"
                        originator="Red Rock"
                        originatorEmail="j.murphy@lead.com"
                        contact="Primary"
                        rReps="12"
                        investors="24"
                    />
                </tbody>
            </table> 
        </div>
    )
}

export default MyIssuanancesTable 