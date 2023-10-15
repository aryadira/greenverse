/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import { greenInfra } from '../../constants/contents/services/green-infrastructure';
const GreenInfraSection = () => {
	return (
		<div className='border-t-2 pt-96 lg:pt-0 border-[#0000004d]'>
			<p className='text-[#676767] pt-14 -mb-12'>Definition.</p>
			{greenInfra.map((data) => (
				<div
					className='infrastructure-section border-b-[2px] border-[#3d3d3d4d] pb-12 mt-12 relative'
					id={data.id_text}
					key={data.id}>
					<h1 className='max-w-[610px] title text-3xl lg:text-3xl font-HaasMd'>
						{data.title}
					</h1>
					<p className='mt-4 max-w-[610px]'>{data.desc}</p>
					{data.content.map((contentSection) => (
						<div
							className='infrastructure-content mt-12'
							key={contentSection.id}>
							{contentSection.img.map((imgContent) => (
								<div className='img-content mt-8' key={imgContent.id}>
									<h1 className='font-HaasMd text-xl'>
										{imgContent.title_img}
									</h1>
									<img className='mt-8' src={imgContent.path} alt='' />
									<p className='mt-6 max-w-[710px]'>{imgContent.desc_img}</p>
								</div>
							))}
							<p>{contentSection.sub_title}</p>

							{contentSection.paragraph.map((paragraphContent) => (
								<div
									className='paragraph mt-4 lg:max-w-[600px] xl:max-w-[716px]'
									key={paragraphContent.id}>
									<div className='text'>{paragraphContent.text}</div>
								</div>
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
								<a href='#third'>Smart Irrigation Technology: Add-on Sensors</a>
							</li>
							<li className='mt-2 leading-6'>
								<a href='#fourth'>Wind Sensors</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GreenInfraSection;
