import Link from 'next/link'
import React from 'react'

interface HeroProps {
    bgImage: boolean,
    title: string,
    text: string,
}

const Hero = ({bgImage, title, text}:HeroProps) => {
  return (
    <div className={`${bgImage ? "bg-officeHero bg-cover bg-no-repeat h-[calc(100vh-5rem)] text-white" : "" }`}>
        <div className='h-full flex justify-center items-center'>
        <div className={`flex flex-col text-center ${bgImage ? "border-x-4 border-x-white px-4 md:pt-20 pt-24 pb-8 mx-4 md:mx-12 lg:mx-24 gap-10 md:gap-14" : "border-x-4 border-x-blue px-4 md:mt-20 mt-14 pt-8 pb-8 mx-4 md:mx-12 lg:mx-24 gap-10 md:gap-14"}`}>

        <h1 data-aos="fade-up" data-aos-duration="600" className='max-w-[55ch] mx-auto text-2xl md:text-4xl lg:text-5xl font-black'>
            {title}
        </h1>

        <p data-aos="fade-up"  className='md:text-lg font-bold text-center max-w-[87ch] mx-auto'>
            {text}
        </p>

        <Link href="./contacto">
            <button className={`hover:border hover:border-black hover:bg-white hover:text-black transform duration-300 ease-in-out p-4 rounded-full bg-black text-white border-black hover:scale-110 animate-appear`}>
                Haz clic aquí para Comenzar!
            </button>
        </Link>
        </div>
        </div>

    </div>
  )
}

export default Hero