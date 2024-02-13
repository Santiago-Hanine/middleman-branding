import React from 'react'
import Card from '../Card'
import Link from 'next/link'

interface BoxProps {
    eyebrow: string,
    title: string,
    description: string,
    link: string,
    children?: React.ReactNode,
    rowReverse?: boolean,
}

const Box = ({eyebrow, title, description, link, children, rowReverse}:BoxProps) => {
  return (
    <div className={`${rowReverse ? 'lg:flex-row-reverse from-[rgba(45,102,174,0.28)] to-blue' : 'lg:flex-row from-blue to-[rgba(45,102,174,0.28)]'} text-white flex flex-col justify-between lg:items-center my-20 relative mx-4 md:mx-12 lg:mx-24 rounded-[3rem] pt-24 pb-8 px-8 lg:p-8 bg-gradient-to-r gap-8`}>
            <h4 className={`absolute ${rowReverse ? 'top-6 right-8' : 'top-6 left-8'} text-xl font-black `}>
                {eyebrow}
            </h4>
        <div>

            <div className='w-full'>

                    <h2 data-aos={rowReverse ? "fade-left" : "fade-right"} data-aos-duration="400" className='font-black text-4xl mb-4'>
                            {title}
                    </h2>

                
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" className='text-left text-xl font-regular lg:max-w-[30ch]'>
                        {description}
                    </p>
                    
            </div>
        </div>

        <div className='grid grid-cols-2 gap-x-8 gap-y-8'>
            {children}
        </div>

        <Link className={`lg:absolute ${rowReverse ? 'bottom-6 right-8' : 'bottom-6 left-8'}`} href={link}>
            <button className='hover:border w-full hover:border-black hover:bg-white hover:text-black transform duration-300 ease-in-out p-4 rounded-full bg-black text-white border-black hover:scale-110 animate-appear]'>
                Saber Más...
            </button>
        </Link>
    </div>
  )
}

export default Box