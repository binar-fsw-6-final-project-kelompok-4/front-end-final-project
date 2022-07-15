import React from "react";
import {Image}  from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "../../assets/css/carouselV2.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                slidesPerView={"auto"}
                grabCursor={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mt-5 mb-5"
            >
                <SwiperSlide>
                    <Image src="images/imgBanner.png" alt="imageBanner" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="images/imgBanner-2.jpg" alt="imageBanner" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="images/imgBanner-3.jpg" alt="imageBanner" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}