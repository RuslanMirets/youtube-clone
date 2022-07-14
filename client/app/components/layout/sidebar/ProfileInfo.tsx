import Image from 'next/image';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { formatNumberToK } from 'utils/formatNumberToK';
import Loader from '@/components/ui/Loader';
import { UserService } from '@/services/user.service';
import styles from './ProfileInfo.module.scss';

const ProfileInfo: FC = () => {
	const { data, isLoading } = useQuery(
		'get profile',
		() => UserService.getProfile(),
		{ select: ({ data }) => data },
	);

	return isLoading ? (
		<Loader count={5} />
	) : (
		<>
			<div className={styles.profile_info}>
				{data?.avatarPath && (
					<Image
						src={data?.avatarPath}
						alt=''
						width={120}
						height={120}
						quality={90}
					/>
				)}
				<div className={styles.name}>{data?.name}</div>
				<div className={styles.location}>{data?.location}</div>
			</div>
			<div className={styles.information}>
				<div className={styles.item}>
					<div className={styles.top}>{data?.videosCount}</div>
					<div className={styles.bottom}>videos</div>
				</div>
				<div className={styles.item}>
					<div className={styles.top}>
						{formatNumberToK(data?.subscribersCount || 0)}
					</div>
					<div className={styles.bottom}>subscribers</div>
				</div>
			</div>
		</>
	);
};

export default ProfileInfo;
