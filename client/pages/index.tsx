import shuffle from 'lodash/shuffle';
import type { GetStaticProps, NextPage } from 'next';
import Home from '@/components/pages/home/Home';
import { IHome } from '@/components/pages/home/home.interface';
import { VideoService } from '@/services/video.service';

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll();
		const randomVideo = {};
		const topVideo = {};
		const topChannels: any[] = [];

		return {
			props: {
				newVideos,
				weeklyVideos: shuffle(newVideos),
				randomVideo,
				topVideo,
				topChannels,
			},
			revalidate: 60,
		};
	} catch (error) {
		return {
			props: {
				newVideos: [],
				weeklyVideos: [],
				randomVideo: {},
				topVideo: {},
				topChannels: [],
			},
		};
	}
};

export default HomePage;
