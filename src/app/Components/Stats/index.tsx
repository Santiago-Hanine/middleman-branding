import Image from 'next/image'
import React from 'react'
import { StatInfo } from './StatInfo'
import Layout from '../Layout'

interface StatsProps {
    excerpt: string,
    title: string,
    children: React.ReactNode
}

const Stats = ({excerpt, title, children}:StatsProps) => {
  return (
	<Layout>
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
				{children}
			</div>
		</div>
	</Layout>
  )
}

export default Stats