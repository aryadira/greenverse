/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import { greenInfra } from '../../constants/contents/services/green-infrastructure';
const GreenInfraSection = () => {
	return (
		<div className='border-t-2 pt-7 border-[#0000004d]'>
			<p className='text-[#676767]'>Definition.</p>
			{greenInfra.map((data) => (
				<div
					className='infrastructure border-b-[2px] border-[#3d3d3d4d]'
					id={data.id_text}
					key={data.id}>
					<h1 className='max-w-[510px] title text-3xl lg:text-3xl font-HaasMd lg:mt-12 '>
						{data.title}
					</h1>
					{data.content.map((contentSection) => (
						<div
							className='infrastructure-content mt-12'
							key={contentSection.id}>
                <img src="" alt="" />
							<p className='text-xl font-HaasMd'>{contentSection.sub_title}</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default GreenInfraSection;
