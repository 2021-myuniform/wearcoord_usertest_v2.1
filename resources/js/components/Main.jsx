import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import BottomNav from './BottomNav';

import About from './parts/About';
import Top from './parts/Top';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Header from './parts/Header';
import MainCoord from './mycoord/MainCoord';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 70,
        position: 'fixed',
        bottom: 0,
    },
});

function Main() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <Router>
            <div>
                {/* <BottomNav /> */}
                <Header />

                <Switch>
                    <div className="mainTop">
                    <Route path="/main/home" component={Top} />
                    <Route path="/main/mycoord" component={MainCoord} />
                    </div>
                </Switch>

                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction
                        value='main'
                        component={Link}
                        to="/main/home"
                        label="ホーム"
                        icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction
                        value='mycoord'
                        component={Link}
                        to="/main/mycoord"
                        label="MYコーデ"
                        icon={<AccessibilityRoundedIcon />} />
                    <BottomNavigationAction
                        value='item'
                        component={Link}
                        exact to="/"
                        label="アイテム"
                        icon={<SearchRoundedIcon
                        />} />
                    <BottomNavigationAction label="お気に入り" icon={<FavoriteBorderRoundedIcon />} />
                    <BottomNavigationAction label="カート" icon={<ShoppingCartRoundedIcon />} />
                </BottomNavigation>
            </div>
        </Router>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
