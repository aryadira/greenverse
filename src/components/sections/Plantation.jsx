/* eslint-disable react/jsx-key */
import React from 'react';
import { plantation } from '../../constants/contents/services/plantation';

const Plantation = () => {
	return (
		<div>
			<div className='container-plantation mt-4'>
				<div className='plantation-wrapper'>
					{plantation.map((data) => (
						<div className='plantation section' key={data.id}>
							<h1 className='text-3xl font-HaasMd mt-12'>{data.title}</h1>
							<p className='mb-4 max-w-[690px]'>{data.desc}</p>
							{data.content.map((contentList) => (
								<div
									className='plantation-contentList mt-6'
									key={contentList.id}>
									<h1 className='text-xl font-HaasMd'>
										{contentList.sub_title}
									</h1>
									{contentList.paragraph.map((paragraphList) => (
										<p key={paragraphList.id}>{paragraphList.text}</p>
									))}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Plantation;
