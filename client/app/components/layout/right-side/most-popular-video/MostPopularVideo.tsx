/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

const MostPopularVideo: FC = () => {
	return (
		<div id='live'>
			<div className='title_gray'>
				<h2>Top video</h2>
			</div>

			<div className='video_item video_live_item'>
				<div className='thumbnail'>
					<img src='img/main/live.jpg' alt='' />
					<div className='hot'>Live</div>
					<div className='avatar'>
						<img src='img/main/avatar.jpg' alt='' />
					</div>
				</div>
				<div className='author'>Warren Munoz</div>
				<div className='name'>Lake House Vacation! Boating, Tubing & More!</div>
				<div className='description'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsa
					voluptate, natus. Iure vitae dolores suscipit, commodi debitis aut
					culpa sapiente architecto exercitationem. Ullam laudantium ea hic
					inventore. Rem, alias.
				</div>
				<div className='number_info'>
					<div className='views'>VIEWS 29.2K</div>
					<div className='comments'>COMMENTS 5.8K</div>
				</div>
			</div>
		</div>
	);
};

export default MostPopularVideo;
