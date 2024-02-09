import Image from "next/image"

interface CardProps {
    img: string,
    title: string,
    aosDuration: number,
}

const Card = ({img, title, aosDuration}: CardProps) => {
  return (
    <div data-aos="fade-up" data-aos-duration={aosDuration} className='bg-white relative w-72 flex flex-col items-center justify-evenly gap-5 rounded-3xl p-6'>
        <div className="w-28 flex justify-center items-center">
            <img src={img} alt={title} />
        </div>
        <h3 className="text-black text-center  max-w-[19ch]">{title}</h3>
    </div>
  )
}

export default Card