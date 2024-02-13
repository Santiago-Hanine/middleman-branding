import React from 'react'

interface CardsWithText {
    title: string,
    text: string,
    imgSrc: string,
    imgAlt: string,
    aosDelay: number,
}

const CardsWithText = ({title, text, imgSrc, imgAlt, aosDelay}: CardsWithText) => {
  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay} className="p-4 flex flex-col gap-8 h-full md:h-auto md:min-h-[270px] justify-around bg-white rounded-[40px_0px_40px_0px] drop-shadow-md">
        <div className='flex items-center gap-4'>
            <img className='w-16' src={imgSrc} alt={imgAlt} />
            <h3 className='font-bold text-2xl lg:text-xl md:w-2/3 text-[#0F110F]'>
                {title}
            </h3>
        </div>
        <p className='text-sm md:text-base text-[#696687]'>
            {text}
        </p>
    </div>
  )
}

export default CardsWithText