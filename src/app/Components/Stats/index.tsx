import Image from 'next/image'
import React from 'react'
import { StatInfo } from './StatInfo'

interface StatsProps {
    excerpt: string,
    title: string,
}

const Stats = ({excerpt, title}:StatsProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-20 px-10 md:px-20 py-10'>
        <div className='flex flex-col justify-center items-center gap-6'>
            <Image src="/tabla.png" alt="table" width={30} height={100} />

            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-lightBlue font-black'>
                    {excerpt}
                </h3>

                <h2 className='text-4xl md:text-5xl font-black text-center'>
                    {title}
                    <span className='text-lightBlue'>
                        .
                    </span>
                </h2>
            </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                StatInfo.map((stat, index) => (
                    <div data-aos="fade-up" data-aos-delay={stat.aosDelay} className='flex flex-col gap-2' key={index}>
                        <h4 className='text-lightBlue font-black text-4xl'>{stat.id}</h4>
                        <h2 className='text-4xl font-black'>{stat.titulo}</h2>
                        <p className=' text-gray-500/80 '>
                            {stat.texto}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Stats