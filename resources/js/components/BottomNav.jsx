import React from 'react';
import ReactDOM from 'react-dom';
import NavBtn from "./parts/NavBtn";


function BottomNav() {
    return (
        <div>
            <NavBtn></NavBtn>
        </div>
);
}

export default BottomNav;

if (document.getElementById('bottomNav')) {
    ReactDOM.render(<BottomNav />, document.getElementById('bottomNav'));
}
