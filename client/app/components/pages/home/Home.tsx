/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Layout from '../../layout/Layout';
import RightSide from '../../layout/right-side/RightSide';
import Line from '../../ui/Line';
import { IHome } from './home.interface';
import Recommended from './recommended/Recommended';
import WeeklyFeatured from './weekly-featured/WeeklyFeatured';

const Home: FC<IHome> = ({ weeklyVideos }) => {
	const { user } = useAuth();

	console.log(weeklyVideos);

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
