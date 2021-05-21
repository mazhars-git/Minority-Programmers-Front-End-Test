import React, { useRef } from 'react';
import cardLogo from '../../../images/Frame 313.png';
import FeatureContent from '../FeatureContent/FeatureContent';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Pagination, Navigation } from "swiper/core";
  
// install Swiper modules
SwiperCore.use([Pagination,Navigation]);
  
const Features = () => {
    const swiperRef = useRef(null);

    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.current.swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
      ]);
    }
  
    const prepend = () => {
      swiperRef.current.swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    }
  
    const append = () => {
      swiperRef.current.swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    }
  
    const append2 = () => {
      swiperRef.current.swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
      ]);
    }

    const featuresInfo =[
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 1001
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 1002
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 1003
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 1004
        }
    ]
    
    return (
        <section>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-2">
                        <h2>Featured Startups</h2>
                        <p>Invest in the next billion dollar company today</p>
                    </div>
                    <div className="col-md-10 align-self-center">
                        <div className="row">
                            <Swiper 
                                ref={swiperRef} 
                                slidesPerView={3} 
                                centeredSlides={true} 
                                spaceBetween={30} 
                                pagination={{
                                    "type": "fraction"
                                    }} 
                                navigation={true} 
                                className="mySwiper">
                                  
                                    { 
                                    featuresInfo.map(info => 
                                        <SwiperSlide>
                                            <FeatureContent 
                                                info={info} 
                                                key={info.id}
                                            >
                                            </FeatureContent>
                                        </SwiperSlide>
                                        )
                                    }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
                
        </section>
    );
};

export default Features;