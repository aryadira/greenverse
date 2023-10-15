/* eslint-disable react/jsx-key */
import React from 'react';
import { smartIrrigation } from '../../constants/contents/services/smart-irrigation';
import { Link } from 'react-router-dom';

const SmartIrrigation = ({ idText, ...props }) => {
	return (
		<div>
			<div className='container-irrigation mt-4'>
				<div className='irrigation-wrapper pt-96 lg:pt-0 relative '>
					{smartIrrigation.map((data) => (
						<div className='irrigation-section border-b-[2px] border-[#3d3d3d4d]' id={data.id_text} key={data.id}>
							<h1 className='max-w-[510px] title text-3xl lg:text-3xl font-HaasMd lg:mt-12 '>
								{data.title}
							</h1>
							{data.content.map((content) => (
								<div className='irrigation-content mt-12' key={content.id}>
									<p className='text-xl font-HaasMd'>{content.sub_title}</p>
									{content.paragraph.map((paragraph) => (
										<div className='text'>
											<p key={paragraph.id} className='text-sm md:text-base mt-4 max-w-[610px]'>
												{paragraph.text}
											</p>
										</div>
									))}
									{content.img.map((imgContent) => (
										<div className='img mb-12' key={imgContent.id}>
											<img
												src={imgContent.path}
												className='max-w-[290px] h-auto my-8'
												alt=''
											/>
											<p className='max-w-[610px]'>{imgContent.desc_img}</p>
										</div>
									))}
								</div>
							))}
						</div>
					))}
					<div className='absolute sm:max-w-full md:max-w-[350px] lg:max-w-max lg:right-0 top-0'>
						<div className='wrapper'>
							<div className='container bg-white p-12 max-w-[450px] rounded-[30px]'>
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

export default SmartIrrigation;
