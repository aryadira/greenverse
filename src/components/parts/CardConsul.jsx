import React from 'react';

const CardConsul = (props) => {
	return (
		<div>
			<div className='wrapper'>
				<div className='container-card mt-32 lg:mt-0'>
					<div className='card max-w-[190px] max-h-[190px]'>
						<div className='img flex justify-center items-center mb-4 bg-white py-16'>
							<img src={props.path} alt='' />
						</div>
						<div className='desc text-center'>
							<h2 className='mt-8 font-HaasMd text-xl'>{props.sub_title}</h2>
							<p className='text-[#8F8F8F]'>{props.desc}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardConsul;
