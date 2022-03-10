import { DefaultSeo } from 'next-seo';
import { SessionProvider } from 'next-auth/react';
import { Provider as UrqlProvider } from 'urql';

import '../css/tailwind.css';

import { useUrqlClient } from '$src/lib/urql-client';
import Header from '../components/header';
import HeaderPromo from '$src/components/headerPromo';

const App = ({ Component, pageProps }: any) => {
	const urqlClient = useUrqlClient();
	return (
		<SessionProvider session={pageProps.session}>
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
				<HeaderPromo />
				<Header />
				<Component {...pageProps} />
			</UrqlProvider>
		</SessionProvider>
	);
};

export default App;
