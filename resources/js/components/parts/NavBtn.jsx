import React from 'react';
import { Link } from 'react-router-dom';
// import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 70,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <Router>
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
                <BottomNavigationAction label="アイテム" icon={<SearchRoundedIcon />} />
                <BottomNavigationAction label="お気に入り" icon={<FavoriteBorderRoundedIcon />} />
                <BottomNavigationAction label="カート" icon={<ShoppingCartRoundedIcon />} />
            </BottomNavigation>
        </Router>
    );
}
