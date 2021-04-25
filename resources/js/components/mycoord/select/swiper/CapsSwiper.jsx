import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Img1 from '../../../../../../public/img/test/caps/chitosesports-b_10014565.png';
import Img2 from '../../../../../../public/img/test/caps/chitosesports_10040635.png';
import Img3 from '../../../../../../public/img/test/caps/sportsman_11352054.png';


export default class Capsswiper extends Component {

    // const [controlledSwiper, setControlledSwiper] = useState(null);


    render() {
        return (
            <div>
                <Swiper id="controller"
                // onSwiper={setControlledSwiper}
                    slidesPerView={3}
                    centeredSlides={true}
                >
                    <SwiperSlide key='1' tag="li" className="wearLi">
                        <img
                            src={Img1}
                            style={{ listStyle: 'none' }}
                            className="wearImg"
                        />
                    </SwiperSlide>
                    <SwiperSlide key='2' tag="li" className="wearLi">
                        <img
                            src={Img2}
                            style={{ listStyle: 'none' }}
                            className="wearImg"
                        />
                    </SwiperSlide>
                    <SwiperSlide key='3' tag="li" className="wearLi">
                        <img
                            src={Img3}
                            style={{ listStyle: 'none' }}
                            className="wearImg"
                        />
                    </SwiperSlide>
                    <SwiperSlide key='1' tag="li" className="wearLi">
                        <img
                            src={Img1}
                            style={{ listStyle: 'none' }}
                            className="wearImg"
                        />
                    </SwiperSlide>
                    <SwiperSlide key='2' tag="li" className="wearLi">
                        <img
                            src={Img2}
                            style={{ listStyle: 'none' }}
                            className="wearImg"
                        />
                    </SwiperSlide>
                    <SwiperSlide key='3' tag="li" className="wearLi">
                        <img
                            src={Img3}
                            style={{ listStyle: 'none' }}
                            className="wearImg"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }
}
