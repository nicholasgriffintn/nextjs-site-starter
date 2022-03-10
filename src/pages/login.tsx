import {
	signIn,
	getSession,
	getProviders,
	getCsrfToken,
} from 'next-auth/react';

type Provider = {
	id?: string;
	name?: string;
};

export async function getServerSideProps(context) {
	const { req } = context;
	const session = await getSession({ req });
	const providers = await getProviders();
	const csrfToken = await getCsrfToken();

	const newProviders: Provider[] =
		providers && Object.values(providers).length > 0
			? Object.values(providers).map((provider) => provider)
			: [];

	if (session) {
		return {
			redirect: { destination: '/' },
		};
	}

	return {
		props: {
			providers: newProviders,
			csrfToken,
		},
	};
}

export default function Login({ providers }: { providers: Provider[] }) {
	return (
		<section>
			<div className="bg-white">
				<div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
					<div className="w-11/12 sm:w-2/3 lg:flex flex-col mb-5 sm:mb-10">
						<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xltext-gray-800 font-black leading-7 md:leading-10">
							Sign into your account
						</h1>
						<h2 className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 mt-6">
							Click one of the options below to get started
						</h2>
						{providers.length > 0 ? (
							<div>
								{providers.map((provider) => {
									return (
										<div key={provider.name}>
											<button
												onClick={() => signIn(provider.id)}
												aria-label={`Sign in with ${provider.name}`}
												role="button"
												className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
											>
												<p className="text-base font-medium ml-4 text-gray-700">
													Sign in with {provider.name}
												</p>
											</button>
										</div>
									);
								})}
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
}
