import { DefaultSeo } from 'next-seo';
import '../css/tailwind.css';
import { Provider as UrqlProvider } from 'urql';
import { useUrqlClient } from '$src/lib/urql-client';

const App = ({ Component, pageProps }: any) => {
	const urqlClient = useUrqlClient();
	return (
		<UrqlProvider value={urqlClient}>
			<DefaultSeo
				titleTemplate="%s | App Name"
				title="Page"
				description="App Discription"
				openGraph={{
					type: 'website',
					locale: 'en_GB',
					url: 'https://app.url/',
					title: 'App Name',
					site_name: 'App Name',
					description: 'App Description',
					images: [{ url: '/images/social.png' }],
				}}
				twitter={{
					handle: '@app_handle',
					site: '@app_handle',
					cardType: 'summary_large_image',
				}}
			/>
			<Component {...pageProps} />
		</UrqlProvider>
	);
};

export default App;
