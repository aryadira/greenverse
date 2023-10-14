/* eslint-disable no-unused-vars */
import React from 'react';
import TopicsButtonCard from '../parts/TopicsButtonCard';
import TopicsCard from '../parts/TopicsCard';
import { topics1, topics2, topics3 } from '../../assets/img';

const SectionTopics = () => {
	return (
		<div>
			<div className='wrapper'>
				<div>
					<p className='text-[#676767] text-xl font-base'>Going to...</p>
					<p className='text-[32px] text-[#676767] max-w-sm'>
						<span className='text-black'>Topics.</span> Get more information out
						of here
					</p>
					<div className='topics-card flex justify-between flex-wrap w-full mt-4'>
						<div className='card 2xl:block flex gap-5 md:flex-nowrap flex-wrap'>
							<TopicsButtonCard title='Design' />
							<TopicsButtonCard title='Solution' />
							<TopicsButtonCard title='Farming' />
						</div>
						<div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
							<TopicsCard
								img={topics1}
								title='Design, Infrastructure, Solutions'
								desc='The New park of Mars'
							/>
							<TopicsCard
								img={topics2}
								title='Design, Infrastructure, Solutions'
								desc='The New park of Mars'
							/>
							<TopicsCard
								img={topics3}
								title='Design, Infrastructure, Solutions'
								desc='The New park of Mars'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionTopics;
