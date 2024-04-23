import React from 'react';
import { Cards } from './Cards';
import CardsWithText from '../CardsWithText';
import Layout from '../Layout';

interface CardContainerProps {
    title: string;
}

const CardContainer = ({ title }: CardContainerProps) => {
    return (
        <div className='bg-[rgba(2,62,138,0.1)] py-10 px-10 lg:py-40 lg:px-28'>
			<Layout>
				<div className='flex flex-col gap-14'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl mx-auto lg:w-4/5 font-black text-center '>{title}</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{Cards.map((card, index) => (
							<div key={index} className={`relative ${(index) === 1 || (index) === 4 ? 'lg:mt-10' : ''}`}>
								<CardsWithText aosDelay={card.aosDelay} imgSrc={card.src} imgAlt={card.title} title={card.title} text={card.text} />
							</div>
						))}
					</div>
				</div>
			</Layout>
        </div>
    );
};

export default CardContainer;
