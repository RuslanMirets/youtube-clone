/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Line from '../../ui/Line';
import MostPopularVideo from './most-popular-video/MostPopularVideo';
import TopChannels from './top-channels/TopChannels';

const RightSide: FC = () => {
	return (
		<div className='right_side'>
			<MostPopularVideo />

			<Line />

			<TopChannels />
		</div>
	);
};

export default RightSide;
