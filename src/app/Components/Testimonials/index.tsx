"use client"

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import Image from 'next/image';
import Quote from '../../../../public/quote.png'
import QuoteReverse from '../../../../public/QuoteReverse.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialsProps {
    testimonials: string[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        center:true,
        arrows: false,
    };

    return (
        <>
        <div className="bg-office bg-cover 2xl:bg-local h-screen pt-28 bg-no-repeat bg-center mb-20 px-6 md:px-10">
            <div className='relative bg-[rgba(255,255,255,0.85)] h-[30rem] lg:h-[20rem] pt-20 pb-12 px-10 md:px-16 md:mt-96'>
                <Image data-aos="fade-up"  data-aos-duration="300" className='absolute top-4 left-2' src={Quote} alt='Quote sign'/>
                <div className='slider-container'>
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="mt-10 sm:mt-16 md:mt-28 lg:mt-6 xl:mt-10 text-xl lg:text-3xl text-black font-black md:font-semibold">{testimonial}</div>
                            ))}
                    </Slider>
                </div>
                <Image data-aos="fade-up" data-aos-duration="600" className='absolute top-4 right-2 ' src={QuoteReverse} alt='Quote sign'/>
            </div>
        </div>
</>
    );
};

export default Testimonials;
