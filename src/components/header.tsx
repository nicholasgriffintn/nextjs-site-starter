import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const [menuToggled, setMenuToggled] = useState(false);
	const { data: session, status } = useSession();

	return (
		<header>
			<nav className="w-full border-b">
				<div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
					<div>
						<Link href="/">
							<a className="w-12">
								<img className="w-12" src="/logo.png" alt="App Name" />
							</a>
						</Link>
					</div>
					<div>
						<button
							onClick={() => setMenuToggled(true)}
							className="sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
						>
							<svg
								aria-haspopup="true"
								aria-label="open Main Menu"
								xmlns="http://www.w3.org/2000/svg"
								className="md:hidden icon icon-tabler icon-tabler-menu"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="#2c3e50"
								fill="none"
								strokeLinecap="round"
							>
								<path stroke="none" d="M0 0h24v24H0z"></path>
								<line x1="4" y1="8" x2="20" y2="8"></line>
								<line x1="4" y1="16" x2="20" y2="16"></line>
							</svg>
						</button>
						<div
							id="menu"
							className={`lg:block ${menuToggled ? 'md:block' : 'hidden'}`}
						>
							<button
								onClick={() => setMenuToggled(false)}
								className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6"
							>
								<svg
									aria-label="close main menu"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="#2c3e50"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
							<ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
								<li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
									<Link href="/">
										<a>Link 1</a>
									</Link>
								</li>
								<li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
									<Link href="/">
										<a>Link 2</a>
									</Link>
								</li>
								<li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
									<Link href="/">
										<a>Link 3</a>
									</Link>
								</li>
								<li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
									<Link href="/">
										<a>Link 4</a>
									</Link>
								</li>
								<li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
									<Link href="/">
										<a>Link 5</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					{status === 'authenticated' ? (
						<button onClick={() => signOut()}>Sign out</button>
					) : (
						<button
							onClick={() => router.push('/api/auth/signin')}
							className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm"
						>
							Sign In
						</button>
					)}
				</div>
			</nav>
		</header>
	);
}
