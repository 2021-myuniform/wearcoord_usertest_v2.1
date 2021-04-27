import React, { Component } from 'react'

import Capsswiper from './swiper/CapsSwiper'
import Topsswiper from './swiper/TopsSwiper'
import Pantsswiper from './swiper/PantsSwiper'
import Shoesswiper from './swiper/ShoesSwiper'
import Testswiper from './swiper/TestSwiper';
import { Btn } from './swiper/Btn'

export default class Onmannequin extends Component {

    render() {
        return (
                <div className="mannequinImg">
                        <Capsswiper />
                        <Topsswiper />
                        <Pantsswiper />
                        <Shoesswiper />
                        <Testswiper
                         />
                         <Btn />
                </div>

        )
    }
}
