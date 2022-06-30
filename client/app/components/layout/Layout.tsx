import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main id='youtube_main'>
				<Sidebar />
				<section className='content'>
					<Header />
					<div className='content-wrapper'>{children}</div>
				</section>
			</main>
		</>
	);
};

export default Layout;
