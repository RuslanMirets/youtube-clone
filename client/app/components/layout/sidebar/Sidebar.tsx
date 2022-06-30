/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useAuth } from '@/hooks/useAuth';

const Sidebar: FC = () => {
	const { user } = useAuth();

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
			<div className='profile_info'>
				<Image src='/img/main/avatar.jpg' alt='' width={70} height={70} />
				<div className='name'>Nannie Nelson</div>
				<div className='location'>Montreal, QC</div>
			</div>
			<div className='information'>
				<div className='item'>
					<div className='top'>278</div>
					<div className='bottom'>videos</div>
				</div>
				<div className='item'>
					<div className='top'>36.5k</div>
					<div className='bottom'>subscribers</div>
				</div>
			</div>
			<div className='line'></div>
			<ul className='mnu_sidebar'>
				<li>
					<a href='#'>
						<img src='img/common/multimedia.svg' alt='' />
						<b>Videos</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/video-camera.svg' alt='' />
						<b>Movies & Shows</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/gift.svg' alt='' />
						<b>Premium Contents</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/live-news.svg' alt='' />
						<b>Live</b>
					</a>
				</li>

				<div className='line_mnu'></div>

				<li>
					<a href='#'>
						<img src='img/common/calendar.svg' alt='' />
						<b>Subscribtions</b>
						<span className='number'>29 new</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/smartphone.svg' alt='' />
						<b>Library</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/like.svg' alt='' />
						<b>Liked Videos</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/time.svg' alt='' />
						<b>Watch Later</b>
					</a>
				</li>

				<div className='line_mnu'></div>

				<li>
					<a href='#'>
						<img src='img/common/adjust.svg' alt='' />
						<b>Settings</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/support.svg' alt='' />
						<b>Help & Report</b>
					</a>
				</li>
			</ul>

			<div className='switch_wrapper'>
				<label className='switch'>
					<input type='checkbox' defaultChecked />
					<span className='slider round'></span>
				</label>
				<p>Light On</p>
			</div>

			<a href='#' id='logout_btn'>
				Logout
			</a>
			<div className='copy'>© 2020 Youtube, LLC</div>
		</section>
	) : null;
};

export default Sidebar;
