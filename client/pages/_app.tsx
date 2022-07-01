import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../app/assets/styles/globals.scss';
import '../app/assets/styles/old-styles.scss';
import AuthProvider from '../app/providers/AuthProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
