/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import IconsRight from './icons/IconsRight';

const Header: FC = () => {
	return (
		<header id='header'>
			<div className='search_top'>
				<label>
					<input type='text' placeholder='Search videos, stars or authors...' />
					<img src='img/common/search.svg' alt='' />
				</label>
			</div>
			<IconsRight />
		</header>
	);
};

export default Header;
