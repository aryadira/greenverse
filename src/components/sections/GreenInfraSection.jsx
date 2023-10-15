/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import { greenInfra } from '../../constants/contents/services/green-infrastructure';
const GreenInfraSection = () => {
	return (
		<div className='border-t-2 border-[#0000004d]'>
			<p className='text-[#676767] pt-14 -mb-12'>Definition.</p>
			{greenInfra.map((data) => (
				<div
					className='infrastructure border-b-[2px] border-[#3d3d3d4d] pb-12 mt-12'
					id={data.id_text}
					key={data.id}>
					<h1 className='max-w-[610px] title text-3xl lg:text-3xl font-HaasMd'>
						{data.title}
					</h1>
					<p className='mt-4 max-w-[810px]'>{data.desc}</p>
					{data.content.map((contentSection) => (
						<div
							className='infrastructure-content mt-12'
							key={contentSection.id}>
							{contentSection.img.map((imgContent) => (
								<div className='img-content' key={imgContent.id}>
									<img src={imgContent.path} alt='' />
									<p>{imgContent.desc_img}</p>
								</div>
							))}
							<p>{contentSection.sub_title}</p>
							{contentSection.paragraph.map((paragraphContent) => (
								<div
									className='paragraph mt-4 max-w-[716px]'
									key={paragraphContent.id}>
									<div className='text'>{paragraphContent.text}</div>
								</div>
							))}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default GreenInfraSection;
