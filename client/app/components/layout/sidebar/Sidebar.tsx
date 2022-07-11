/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Line from '@/components/ui/Line';
import { defaultValueAuthState } from '@/providers/AuthProvider';
import { AuthService } from '@/services/auth/auth.service';
import { useAuth } from '@/hooks/useAuth';
import ProfileInfo from './ProfileInfo';
import Menu from './menu/Menu';

const Sidebar: FC = () => {
	const { user, setData } = useAuth();

	return user ? (
		<section className='sidebar'>
			<Link href='/'>
				<a className='logo'>
					<Image
						src='/img/common/logo.png'
						alt='Youtube'
						width={130}
						height={42}
					/>
				</a>
			</Link>
			<ProfileInfo />
			<Line />

			<Menu />

			<button
				id='logout_btn'
				onClick={() => {
					AuthService.logout();
					setData && setData(defaultValueAuthState);
				}}
			>
				Logout
			</button>
			<div className='copy'>© 2022 Youtube, LLC</div>
		</section>
	) : null;
};

export default Sidebar;
