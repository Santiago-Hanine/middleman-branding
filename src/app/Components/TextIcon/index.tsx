import React from 'react'
import { TextLists } from './TextLists';
import Image from 'next/image';

interface TextIconProps {
    title: string;
    subTitle: string;
}

const TextIcon = ({title, subTitle}: TextIconProps) => {
  return (
    <div className='py-10 px-10 lg:px-28 flex flex-col gap-8 lg:gap-16'>
        <h2 className='text-2xl md:text-4xl lg:text-4xl lg:w-2/3 mx-auto font-black text-center'>
            {title}
        </h2>

        <div className='flex flex-col lg:flex-row  items-start justify-between gap-8 lg:gap-40'>
            <h4 data-aos="fade-up" className='text-xl md:text-3xl w-full lg:max-w-[20ch] md:leading-10 font-black md:font-extrabold'>
                {subTitle}
            </h4>

            <div className='flex flex-col gap-10 lg:gap-12'>
                {
                    TextLists.map((item, index) => (
                        <div data-aos="fade-up" data-aos-delay={item.aosDelay} key={index} className='flex items-start gap-4'>
                            <Image 
                                className='pt-4'
                                src={item.icon} 
                                alt={item.text}
                                width={30}
                                height={30}
                            />
                            <p className='md:text-lg'>
                                {item.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TextIcon