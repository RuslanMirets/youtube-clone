/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
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
				<div className='video_item'>
					<div className='thumbnail'>
						<img src='img/main/3.jpg' alt='' />
						<time>28:32</time>
						<div className='avatar'>
							<img src='img/main/avatar.jpg' alt='' />
						</div>
					</div>
					<div className='author'>Warren Munoz</div>
					<div className='name'>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className='description'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
						animi aut vel alias voluptate, odio. Tempora sequi et itaque enim a,
						aut excepturi adipisci quam, aspernatur, eaque obcaecati dolor
						tenetur :)
					</div>
					<div className='number_info'>
						<div className='views'>VIEWS 29.2K</div>
						<div className='likes'>LIKES 1.6K</div>
						<div className='date'>3DS AGO</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeeklyFeatured;
