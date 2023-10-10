import { Outlet, useLocation } from 'react-router-dom';
import { servicesBanner } from '../../assets/img';

const Services = () => {
	const path = useLocation();

	return path.pathname != '/services' ? (
		<div className='Services'>
			<Outlet />
		</div>
	) : (
		<div className=''>
			<img src={servicesBanner} alt='' />
			<p>h1</p>
		</div>
	);
};

export default Services;
