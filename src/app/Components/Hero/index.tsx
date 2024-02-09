import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='border-x-4 border-x-blue flex flex-col gap-10 md:gap-14 mx-4 md:mx-12 lg:mx-24 text-center px-4 md:mt-20 mt-14 pt-8 pb-8'>
        
        <h1 data-aos="fade-up" data-aos-duration="600" className='max-w-[55ch] mx-auto text-2xl md:text-4xl lg:text-5xl font-black'>
            Maximiza el crecimiento de tu empresa con nuestras innovadoras estrategias de marketing digital
        </h1>

        <p data-aos="fade-up"  className='md:text-lg font-bold text-center'>
            Nos dedicamos a potenciar el crecimiento de nuestros clientes y colaboradores, impulsando resultados tangibles <span className='hidden lg:inline'><br /></span> en el mundo digital.
        </p>

        <Link href="./contacto">
            <button className='hover:border hover:border-black hover:bg-white hover:text-black transform duration-300 ease-in-out p-4 rounded-full bg-black text-white border-black hover:scale-110 animate-appear'>
                Haz clic aquí para Comenzar!
            </button>
        </Link>
    </div>
  )
}

export default Hero