import Image from "next/image"
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-blue relative w-full'>
        <div className="h-full w-px hidden md:block absolute top-0 bottom-0 left-1/2 bg-white z-10">

        </div>
    <div className='flex lg:px-7 py-10 flex-col'>
        <div className='md:grid grid-cols-2'>
            <div className="flex px-7 lg:pb-10 lg:px-7 flex-col gap-6">
                <h3 className='text-3xl font-semibold tracking-wide md:text-3xl text-center md:text-left text-white'>
                    MiddleMan Branding
                </h3>

                <div className="flex gap-4 text-5xl lg:text-4xl text-white mb-4 justify-center md:justify-start">
                    <Link target="_blank" href="https://www.instagram.com/middleman.branding/">
                        <FaInstagram />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/middleman.branding/">
                        <FaXTwitter />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/middleman.branding/">
                        <FaFacebook />
                    </Link>
                </div>

                <div>
                    <p className="text-white md:text-xl text-center md:text-left">
                    Contact us: <br/>
                    <Link className="font-black tracking-wide underline underline-offset-4" href="mailto:middlemanbrandingteam@gmail.com">
                        middlemanbrandingteam@gmail.com
                    </Link>
                    </p>
                </div>
            </div>

            <div className='flex-col gap-6 hidden md:flex items-center justify-center w-full'>
                <Image src="/obelisco.png" alt="" width={100} height={100}/>
                <p className="text-white text-xl text-center">
                    Buenos Aires, Argentina
                </p>
            </div>
            
        </div>


    </div>
            <div className="text-white text-center font-medium tracking-wider flex justify-center items-center p-8 border-t border-t-white bg-blue absolute w-full z-20">
                © 2024. ALL RIGHTS RESERVED BY MiddleMan Branding
            </div>
    </div>
  )
}

export default Footer