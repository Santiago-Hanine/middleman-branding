"use client"

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import Image from 'next/image';
import Quote from '../../../../public/quote.png'
import QuoteReverse from '../../../../public/QuoteReverse.png'

interface TestimonialsProps {
    testimonials: string[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                setIsVisible(true);
            }, 2000); // Wait for fade-out animation duration before changing the testimonial
        }, 5000);

        return () => clearInterval(intervalId);
    }, [testimonials.length]);

    return (
        <>
        <div className="bg-office bg-fixed 2xl:bg-local h-screen bg-no-repeat bg-center flex justify-center items-center mb-20 px-6 md:px-10">
            <div className='relative bg-[rgba(255,255,255,0.85)] flex justify-center items-center h-[30rem] lg:h-[20rem] pt-20 pb-12 px-10 md:px-16'>
                <Image data-aos="fade-up"  data-aos-duration="300" className='absolute top-4 left-2' src={Quote} alt='Quote sign'/>
                    <p className={`${isVisible ? styles.appear : styles.dissapear} text-xl lg:text-3xl text-black font-black md:font-semibold`}>{testimonials[currentTestimonialIndex]}</p>
                <Image data-aos="fade-up" data-aos-duration="600" className='absolute top-4 right-2 ' src={QuoteReverse} alt='Quote sign'/>
            </div>
        </div>
</>
    );
};

export default Testimonials;
