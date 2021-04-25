import React, { Component } from 'react'
import Leftbtn from '../LeftBtn'
import Rightbtn from '../RightBtn'
import { withRouter } from 'react-router';
import Oncentermannequin from './OnCenterMannequin';

class Selectwear extends Component {
    render() {
        return (
            <div className="displayFlex w100 justifyCenter">
                <div className="selectWearContainer">
                    <Oncentermannequin />
                </div>
            </div>
        )
    }
}

export default withRouter(Selectwear)
