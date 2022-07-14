import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { formatNumberToK } from 'utils/formatNumberToK';
import VideoDuration from './VideoDuration';
import styles from './VideoItem.module.scss';
import { IVideoItem } from './video-item.interface';

dayjs.extend(relativeTime);

const VideoItem: FC<IVideoItem> = ({ item, isLarge, isAvatar }) => {
	return (
		<div className={styles.video_item}>
			<Link href={`/v/${item._id}`}>
				<a className='block'>
					<div className={styles.thumbnail}>
						<Image
							src={item.thumbnailPath}
							alt={item.name}
							width={265}
							height={148}
							layout='responsive'
						/>
						<VideoDuration videoPath={item.videoPath} />
						{isAvatar && (
							<div className={styles.avatar}>
								<Image
									src={item.user?.avatarPath || ''}
									width={36}
									height={36}
									alt={item.user?.name}
								/>
							</div>
						)}
					</div>
					<div className={styles.author}>{item.user?.name}</div>
					<div className={styles.name}>{item.name}</div>
				</a>
			</Link>
			{isLarge && <div className={styles.description}>{item.description}</div>}
			<div className={styles.number_info}>
				<div className={styles.views}>VIEWS {formatNumberToK(item.views)}</div>
				{isLarge && (
					<div className={styles.likes}>
						LIKES {formatNumberToK(item.likes)}
					</div>
				)}
				<div className={styles.date}>
					{dayjs(new Date(item.createdAt)).fromNow()}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
