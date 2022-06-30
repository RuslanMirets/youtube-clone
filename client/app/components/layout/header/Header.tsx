/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

const Header: FC = () => {
	return (
		<header id='header'>
			<div className='search_top'>
				<label>
					<input type='text' placeholder='Search videos, stars or authors...' />
					<img src='img/common/search.svg' alt='' />
				</label>
			</div>
			<div className='icons_right'>
				<a href='#'>
					<img src='img/common/plus.svg' alt='' />
				</a>
				<a href='#'>
					<img src='img/common/review.svg' alt='' />
				</a>
				<a href='#'>
					<img src='img/common/basket.svg' alt='' />
				</a>
			</div>
		</header>
	);
};

export default Header;
