import React from 'react';

import Dots from '../../assets/dots.svg';
import Mailbox from '../../assets/mailbox.svg';

const CommonTablerow = (props) => {
    return (
        <tr>
            <td>{props.deals}</td>
            <td>{props.industry}</td>
            <td>{props.dealStage}</td>
            <td>
                {props.originator}<br />
                <span>
                    <img src={Mailbox} alt="mail" className="mailbox" /> {props.originatorEmail}
                </span>
            </td>
            <td>{props.contact}</td>
            <td>{props.rReps}</td>
            <td>{props.investors}</td>
            <td><img src={Dots} alt="More actions" /></td>
        </tr>
    )
}

export default CommonTablerow