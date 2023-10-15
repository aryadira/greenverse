/* eslint-disable react/jsx-key */
import React from 'react';
import { plantation } from '../../constants/contents/services/plantation';

const Plantation = () => {
	return (
		<div>
			<div className='container-plantation pt-[400px] lg:pt-0 mt-4'>
				<div className='plantation-wrapper'>
					{plantation.map((data) => (
						<div className='plantation section relative' key={data.id}>
							<h1 className='text-[28px] lg:text-3xl font-HaasMd mt-12'>
								{data.title}
							</h1>
							<p className='mb-4 max-w-[400px] lg:max-w-[420px] xl:max-w-[690px]'>{data.desc}</p>
							{data.content.map((contentList) => (
								<div
									className='plantation-contentList mt-6'
									key={contentList.id}>
									<h1 className='text-lg md:text-xl font-HaasMd'>
										{contentList.sub_title}
									</h1>
									{contentList.paragraph.map((paragraphList) => (
										<p className='max-w-[600px]' key={paragraphList.id}>
											{paragraphList.text}
										</p>
									))}
								</div>
							))}
						</div>
					))}
					<div className='absolute sm:max-w-full lg:max-w-[300px] xl:max-w-full lg:right-5 top-[500px] bg-white p-12 max-w-[450px] rounded-[30px]'>
						<div className='wrapper'>
							<div className='container '>
								<p className='desc mb-8'>
									Read the full article or jump to a specific section:
								</p>
								<ul className='list-disc underline'>
									<li className='mt-2 leading-6'>
										<a href='#first'>
											Smart Irrigation Technology: Controllers and Sensors
										</a>
									</li>
									<li className='mt-2 leading-6'>
										<a href='#second'>
											Smart Irrigation Technology: New Controllers
										</a>
									</li>
									<li className='mt-2 leading-6'>
										<a href='#third'>
											Smart Irrigation Technology: Add-on Sensors
										</a>
									</li>
									<li className='mt-2 leading-6'>
										<a href='#fourth'>Wind Sensors</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plantation;
