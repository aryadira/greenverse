import { Link } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
	return (
		<div className='bg-[#222222] text-white'>
			<div className='footer'>
				<div className='wrapper py-12 flex justify-between px-16'>
					<div className='left'>
						<Link to={'/'} className='text-3xl font-HaasBd'>
							Greenverse
						</Link>
					</div>
					<div className='center text-xl'>
						<ul className='flex flex-col gap-4'>
							<Link to={'/products'}>Products</Link>
							<Link to={'/services'}>Services</Link>
							<Link to={'/consultation'}>Consultation</Link>
						</ul>
					</div>
					<div className='right'>
						<ul className='flex flex-col'>
							<div className='text'>
								<h1>Email</h1>
								<p>greenverse@verses.com</p>
							</div>
							<div className='text'>
								<h1>Email</h1>
								<p>greenverse@verses.com</p>
							</div>
							<div className='btn'>
								<Button
									className={`bg-white border text-black hover:-translate-y-2 mt-7`}>
									Join Us
								</Button>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
