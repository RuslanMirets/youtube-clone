import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { formatNumberToK } from 'utils/formatNumberToK';
import { IUser } from '@/types/user.interface';

const ChannelItem: FC<{ item: IUser }> = ({ item }) => {
	return (
		<div className='channel'>
			<div className='info_left'>
				<Link href={`/c/${item._id}`}>
					<a>
						<Image
							src={item.avatarPath}
							alt={item.name}
							width={60}
							height={60}
						/>
					</a>
				</Link>
				<div className='info'>
					<div className={cn('name', { verified: item.isVerified })}>
						{item.name}
					</div>
					<div className='subs'>
						{formatNumberToK(item.subscribersCount)} Subscribers
					</div>
				</div>
			</div>
			<Link href={`/c/${item._id}`}>
				<a className='mnu'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src='/img/common/open-menu.svg' alt='open-menu' />
				</a>
			</Link>
		</div>
	);
};

export default ChannelItem;
