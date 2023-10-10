import { Outlet, useLocation } from 'react-router-dom';
import { servicesBanner } from '../../assets/img';

const Services = () => {
	const path = useLocation();

	return path.pathname != '/services' ? (
		<div className='Services'>
			<Outlet />
		</div>
	) : (
		<div className='wrapper'>
			<div className='banner relative mt-7'>
				<img src={servicesBanner} alt='' />
			</div>
			<div className='text absolute bottom-1/4 text-xl left-[100px]'>
				<p className='text-[#C8C8C8]'>Discover all</p>
				<p className='text-[#C8C8C8] text-[40px] leading-10'>
					<span className='text-white'>Services</span> Get your <br /> needs from our
					services
				</p>
			</div>
		</div>
	);
};

export default Services;
