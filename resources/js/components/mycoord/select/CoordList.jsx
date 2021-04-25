import React, { Component } from 'react'
import CenterMannequin from '../CenterMannequin'
import Leftbtn from '../LeftBtn'
import Rightbtn from '../RightBtn'
import { withRouter } from 'react-router';

class Coordlist extends Component {
    render() {
        return (
            <div className="displayFlex w100">
                <Leftbtn />
                <CenterMannequin />
                <Rightbtn />
            </div>
        )
    }
}

export default withRouter(Coordlist)

