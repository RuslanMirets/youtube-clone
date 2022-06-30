import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap'
					rel='stylesheet'
				/>
				<meta name='theme-color' content='#CD313A' />
				<meta name='msapplication-navbutton-color' content='#CD313A' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#CD313A' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
