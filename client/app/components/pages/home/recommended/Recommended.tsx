import { FC } from 'react';
import VideoItem from '@/components/ui/video-item/VideoItem';
import { IVideo } from '@/types/video.interface';

const Recommended: FC<{ newVideos: IVideo[] }> = ({ newVideos }) => {
	return (
		<div id='recommended'>
			<div className='top_block'>
				<div className='left_title title_gray'>
					<h2>Newest video</h2>
				</div>
				<div className='sort'>By View Trending</div>
			</div>

			<div className='catalog'>
				{newVideos
					.map((video) => <VideoItem key={video._id} item={video} isAvatar />)
					.slice(0, 10)}
			</div>
		</div>
	);
};

export default Recommended;
