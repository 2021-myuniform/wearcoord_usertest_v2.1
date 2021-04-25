import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Img1 from '../../../../../../public/img/test/pants/aozoraya-sp_10142639.png';
import Img2 from '../../../../../../public/img/test/pants/chitosesports_10030744.png';
import Img3 from '../../../../../../public/img/test/pants/chitosesports_10030744gray.png';


export default class Pantswiper extends Component {

    // const [controlledSwiper, setControlledSwiper] = useState(null);


    render() {
        return (
            <div>
                <Swiper id="controller3"
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
