import React, { Component } from 'react'
import CenterMannequin from '../CenterMannequin'
import Leftbtn from '../LeftBtn'
import Rightbtn from '../RightBtn'
import { withRouter } from 'react-router';

class Selectwear extends Component {
    render() {
        return (
            <div className="displayFlex w100 justifyCenter">
                <div className="selectWearContainer">
                    <CenterMannequin />
                </div>
            </div>
        )
    }
}

export default withRouter(Selectwear)
