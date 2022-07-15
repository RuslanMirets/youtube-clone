import shuffle from 'lodash/shuffle';
import type { GetStaticProps, NextPage } from 'next';
import Home from '@/components/pages/home/Home';
import { IHome } from '@/components/pages/home/home.interface';
import { UserService } from '@/services/user.service';
import { VideoService } from '@/services/video.service';

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll();
		const topVideo = await VideoService.getMostPopular().then(
			({ data }) => data[0],
		);
		const topChannels = await UserService.getMostPopular().then(
			({ data }) => data,
		);

		return {
			props: {
				newVideos,
				weeklyVideos: shuffle(newVideos).slice(0, 5),
				randomVideo: shuffle(newVideos)[0],
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
