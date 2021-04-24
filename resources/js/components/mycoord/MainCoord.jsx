import React from 'react'
import CenterMannequin from './CenterMannequin'
import Leftbtn from './LeftBtn'
import Rightbtn from './RightBtn'

function MainCoord() {
    return (
            <div className="selectWearContainer">
                <Leftbtn />
                <CenterMannequin />
                <Rightbtn />
            </div>
    )
}

export default MainCoord
