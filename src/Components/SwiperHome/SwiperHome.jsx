import { EffectCoverflow, Autoplay } from 'swiper/modules';
import classes from './SwiperHome.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import { useRef } from 'react';
import Card from '../Card/Card';

export default function SwiperHome({ games }) {

    const swiperRefLocal = useRef()

    const handleMouseEnter = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.stop()
    };

    const handleMouseLeave = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.start()
    };



    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
                // install Swiper modules
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                }}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className={classes.card + " mySwiper"}
            >
                {games.map(game => {
                    return (
                        <SwiperSlide className={classes.card} key={game.id}>
                            <Card game={game} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}