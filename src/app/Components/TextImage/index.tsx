import Image from "next/image"

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
        <div className={`${bgBlue ? "bg-blue text-white" : "bg-white"} ${rowReverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"} flex items-center gap-8 lg:gap-20 p-10 lg:p-28`}>
                <div data-aos={rowReverse ? "fade-left" : "fade-right"} 
                    className="w-full flex flex-col gap-8"
                    data-aos-delay="400"
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-3xl font-black'>{title}</h2>
                        <p className='text-lg w-11/12 leading-9'>
                                {text}
                        </p>
                </div>

                <Image 
                    data-aos={rowReverse ? "fade-right" : "fade-left"}
                    data-aos-delay="800"
                    src={imgSrc} 
                    alt={imgAlt} 
                    width={700} 
                    height={400}
                />
        </div>
    );
}

export default TextImage