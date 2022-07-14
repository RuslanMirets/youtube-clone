/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import VideoItem from '@/components/ui/video-item/VideoItem';
import { IVideo } from '@/types/video.interface';
import Slider from './Slider';

interface IWeeklyFeatured {
	weeklyVideos: IVideo[];
	randomVideo: IVideo;
}

const WeeklyFeatured: FC<IWeeklyFeatured> = ({ weeklyVideos, randomVideo }) => {
	return (
		<div className='weekly_featured'>
			<div className='info_wf'>
				<div className='sub_name'>Weekly Featured</div>
				<h1>Hello, Summer Vacation!</h1>
				<div className='description'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
					harum placeat ullam vel non, quisquam totam, doloremque expedita odit
					consectetur minima vitae. Facilis nostrum cumque illum fugit rem, nam
					consectetur!
				</div>
				<Slider videos={weeklyVideos} />
			</div>

			<div className='top_video'>
				<VideoItem item={randomVideo} isLarge isAvatar />
			</div>
		</div>
	);
};

export default WeeklyFeatured;
