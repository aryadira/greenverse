/* eslint-disable react/jsx-key */
import React from 'react';
import { verticalFarming } from '../../constants/contents/services/vertical-farming';

const Farming = () => {
	return (
		<div>
			<div className='container-farming mt-4'>
				<div className='farming-wrapper pt-80 lg:pt-0 relative'>
					{verticalFarming.map((data) => (
						<div
							className='irrigation-section border-b-[2px] pb-8 border-[#3d3d3d4d]'
							id={data.id_text}
							key={data.id}>
							<h1 className='max-w-[510px] title text-3xl lg:text-3xl font-HaasMd lg:mt-8 mb-4 '>
								{data.title}
							</h1>
							{data.desc.map((descContent) => (
								<p className='desc mt-4 max-w-[510px]' key={descContent.id}>
									{descContent.text}
								</p>
							))}
							{data.content.map((contentList) => (
								<div className='content'>
									<div className='text'>
										<h2 className='font-HaasMd text-2xl mt-4'>
											{contentList.sub_title}
										</h2>
										{contentList.paragraph.map((paragraphContent) => (
											<p className='text max-w-[710px]'>
												{paragraphContent.text}
											</p>
										))}
									</div>

									<div className='img my-7'>
										<img
											src={contentList.img}
											className='max-w-[300px]'
											alt=''
										/>
									</div>
								</div>
							))}
						</div>
					))}
					<div className='absolute sm:max-w-full lg:max-w-[300px] xl:max-w-full lg:right-5 top-0 bg-white p-12 max-w-[450px] rounded-[30px]'>
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

export default Farming;
