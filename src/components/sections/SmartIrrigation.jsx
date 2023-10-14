/* eslint-disable react/jsx-key */
import React from 'react';
import { smartIrrigation } from '../../constants/contents/services/smart-irrigation';

const SmartIrrigation = () => {
	return (
		<div>
			<div className='container-irrigation mt-4'>
				<div className='irrigation-wrapper'>
					{smartIrrigation.map((data) => (
						<div className='irrigation-section' key={data.id}>
							<h1 className='title text-3xl font-HaasMd mt-12'>{data.title}</h1>
							{data.content.map((content) => (
								<div className='irrigation-content mt-12' key={content.id}>
									<p className='text-xl font-HaasMd'>{content.sub_title}</p>
									{content.paragraph.map((paragraph) => (
										<div className='text'>
											<p key={paragraph.id} className='mt-4 max-w-[710px]'>
												{paragraph.text}
											</p>
										</div>
									))}
									{content.img.map((imgContent) => (
										<div className='img' key={imgContent.id}>
											<img src={imgContent.path} alt='' />
											<p>{imgContent.desc_img}</p>
										</div>
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

export default SmartIrrigation;
