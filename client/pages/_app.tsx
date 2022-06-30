import type { AppProps } from 'next/app';
import '../app/assets/styles/globals.scss';
import '../app/assets/styles/old-styles.scss';
import AuthProvider from '../app/providers/AuthProvider';

function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default App;
