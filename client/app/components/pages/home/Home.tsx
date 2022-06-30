/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Layout from '../../layout/Layout';
import RightSide from '../../layout/right-side/RightSide';
import Line from '../../ui/Line';
import Recommended from './recommended/Recommended';
import WeeklyFeatured from './weekly-featured/WeeklyFeatured';

const Home: FC = () => {
	const { user } = useAuth();

	return (
		<Layout title='Youtube'>
			<div id='wrapper_content'>
				<div className='left_side'>
					<WeeklyFeatured />
					<Line />
					<Recommended />
				</div>
				<RightSide />
			</div>
		</Layout>
	);
};

export default Home;
