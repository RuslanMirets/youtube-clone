import { FC, Fragment } from 'react';
import MenuItem from './MenuItem';
import { menu } from './menu.data';

const Menu: FC = () => {
	return (
		<ul className='mnu_sidebar'>
			{menu.map((item, index) => (
				<Fragment key={item.title}>
					<MenuItem item={item} />
					{index === 3 && <div className='line_mnu' />}
				</Fragment>
			))}
			<div className='line_mnu' />
		</ul>
	);
};

export default Menu;
