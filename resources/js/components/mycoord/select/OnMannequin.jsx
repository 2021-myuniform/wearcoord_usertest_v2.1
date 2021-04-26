import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Capsswiper from './swiper/CapsSwiper'
import Topsswiper from './swiper/TopsSwiper'
import Pantsswiper from './swiper/PantsSwiper'
import Shoesswiper from './swiper/ShoesSwiper'

export default class Onmannequin extends Component {
    constructor(props) {
        super(props);

        this.state = {
          Caps: "Caps",
          Tops: "Tops",
          name3: "Edite",
        };
      }

    render() {
        return (
            <Router>
                <div className="mannequinImg">
                    <Switch>
                        {/* <Capsswiper />
                        <Topsswiper />
                        <Pantsswiper />
                        <Shoesswiper /> */}
                        <Route
                        exact path={"/main/mycoord/wear/" + this.state.Caps}
                        component={Capsswiper}
                         />
                        <Route
                        exact path="/main/mycoord/wear/Tops"
                        component={Topsswiper}
                         />
                        <Route
                        exact path="/main/mycoord/wear/Pants"
                        component={Pantsswiper}
                         />
                        <Route
                        exact path="/main/mycoord/wear/Shoes"
                        component={Shoesswiper}
                         />
                    </Switch>

                </div>
                    <nav>
                <ul className="nav">
                    <Link to={"/main/mycoord/wear/" + this.state.Caps}
                    >
                        <li>capsdayo</li>
                    </Link>
                    <Link to={"/main/mycoord/wear/" + this.state.Tops}>
                        <li>topsdayo</li>
                    </Link>
                </ul>
            </nav>
            </Router>
        )
    }
}
