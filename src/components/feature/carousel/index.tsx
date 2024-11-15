import { useRef } from "react";

import { css } from "@emotion/react";

import ArrowButton from "@/components/common/ArrowButton";

import * as Styles from "./index.style";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper/types";

export interface CarouselProps {
    images: string[];
    titles: string[];
}

const Carousel = ({ images, titles }: CarouselProps) => {
    const swiperRef = useRef<SwiperInstance | null>(null);

    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    return (
        <Styles.CarouselWrapper>
            <Styles.LeftArrowWrapper>
                <ArrowButton direction="left" onClick={handlePrev} />
            </Styles.LeftArrowWrapper>
            <Swiper
                css={css`
                    border-radius: 12px;
                `}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper: SwiperInstance) => (swiperRef.current = swiper)}
            >
                {images.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <Styles.SlideContent>
                            <Styles.OverlayImage src={imgSrc} />
                            <Styles.SlideTitle>{titles[index]}</Styles.SlideTitle>
                        </Styles.SlideContent>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Styles.RightArrowWrapper>
                <ArrowButton direction="right" onClick={handleNext} />
            </Styles.RightArrowWrapper>
        </Styles.CarouselWrapper>
    );
};

export default Carousel;
