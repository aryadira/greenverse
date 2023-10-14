import { BoxContainer, SpacingLayout } from '../../layouts';
import { GreenInfraSection } from '../../components/sections';
import Banner from '../../components/parts/Banner';
import { Search } from '../../components/parts';

const GreenInfrastructure = () => {
	return (
		<div>
			<div className='wrapper'>
				<div className='container-wrapper'>
					<Banner />
				</div>
				<div className='content pt-[150px]'>
					<SpacingLayout>
						<BoxContainer>
							<GreenInfraSection />
						</BoxContainer>
					</SpacingLayout>
				</div>
			</div>
		</div>
	);
};

export default GreenInfrastructure;
