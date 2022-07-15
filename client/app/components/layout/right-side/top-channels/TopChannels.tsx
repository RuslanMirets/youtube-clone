import { FC } from 'react';
import { IUser } from '@/types/user.interface';
import ChannelItem from './ChannelItem';

const TopChannels: FC<{ channels: IUser[] }> = ({ channels }) => {
	return (
		<div id='top_channels'>
			<div className='title_gray'>
				<h2>Top Channels</h2>
			</div>
			<div className='list_channels'>
				{channels.map((channel) => (
					<ChannelItem key={channel._id} item={channel} />
				))}
			</div>
		</div>
	);
};

export default TopChannels;
