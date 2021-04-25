import React, { Component } from 'react'
import CenterMannequin from '../CenterMannequin'
import Leftbtn from '../LeftBtn'
import RightBtn from '../RightBtn'

export default class Selectwear extends Component {
    render() {
        return (
            <div>
                <div className="selectWearContainer">
                    <Leftbtn />
                    <CenterMannequin />
                    <RightBtn />
                </div>
                <p>セレクト画面</p>
            </div>
        )
    }
}
