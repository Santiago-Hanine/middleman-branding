import Image from "next/image"
import Layout from "../Layout"

interface TextImage {
    bgBlue: boolean,
    title: string,
    text: string,
    rowReverse: boolean,
    imgSrc: string,
    imgAlt: string,
}

const TextImage = ({bgBlue, title, text, rowReverse, imgSrc, imgAlt}:TextImage) => {
    return (
        <div className={`${bgBlue ? "bg-blue text-white" : "bg-white"}`}>
			<Layout>
        	<div className={`${rowReverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"} flex items-center gap-8 lg:gap-20 p-10 lg:p-28`}>
                <div className="w-full flex flex-col gap-8"
                    >
                        <h2 data-aos="fade-up" data-aos-delay="200" className='text-3xl md:text-4xl lg:text-3xl font-black'>{title}</h2>
                        <p data-aos="fade-up" data-aos-delay="200" className='text-lg lg:w-11/12 leading-9'>
                                {text}
                        </p>
                </div>

                <Image 
                    data-aos="fade-up"
                    data-aos-delay="500"
                    src={imgSrc} 
                    alt={imgAlt} 
                    width={600} 
                    height={400}
                />
        </div>
		</Layout>
        </div>
    );
}

export default TextImage