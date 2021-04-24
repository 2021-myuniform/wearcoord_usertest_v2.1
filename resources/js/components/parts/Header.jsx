import React from 'react'
import Logo from '../.././../../public/img/logo/0080E4-long.png'

function Header() {
    return (
            <header className="header" >
                <a className="titleIcon" href="">
                    <img className="titleImg" src={Logo} alt="" />
                </a>
                <a className="settingIcon" href="">
                    <span class="material-icons-outlined">
                        settings
                    </span>
                </a>
            </header>
    )
}

export default Header
