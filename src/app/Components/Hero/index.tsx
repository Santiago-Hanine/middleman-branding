import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='border-x-4 border-x-blue flex flex-col gap-14 mx-24 text-center mt-20 pt-8 pb-8'>
        <h1 data-aos="fade-up" data-aos-duration="600" className='text-5xl font-black'>
            Maximiza el crecimiento de tu empresa con nuestras innovadoras estrategias de marketing digital
        </h1>

        <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="400" className='text-lg font-bold'>
            Nos dedicamos a potenciar el crecimiento de nuestros clientes y colaboradores, impulsando resultados tangibles <br /> en el mundo digital.
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