/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoItem from '@/components/ui/video-item/VideoItem';
import { IVideo } from '@/types/video.interface';

const Slider: FC<{ videos: IVideo[] }> = ({ videos }) => {
	return (
		<Swiper
			className='slider_wf'
			modules={[Autoplay]}
			spaceBetween={10}
			slidesPerView={2}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			// autoplay={{ delay: 4000 }}
		>
			{videos.map((video) => (
				<SwiperSlide key={video._id}>
					<VideoItem item={video} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
