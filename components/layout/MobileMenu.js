import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function MobileMenu() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	return (
		<div className='lg:hidden'>
			<button
				className={
					open
						? 'fixed top-5 right-7 z-20'
						: 'absolute top-5 right-7 z-20'
				}
				onClick={() => setOpen(!open)}
			>
				<svg
					className='h-8 w-8 hover:bg-indigo-500 hover:bg-opacity-40 hover:p-0.5 hover:rounded'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z'
						fill='white'
					></path>
				</svg>
			</button>
			<nav
				className={
					open
						? 'fixed inset-0 sm:left-1/2 bg-gray-900 border-l-2 border-indigo-600 flex flex-col justify-around items-center p-10 z-10'
						: 'hidden'
				}
			>
				<Link href='/'>
					<a
						className={
							router.pathname == '/'
								? 'text-xl font-semibold text-gray-50 border-t border-solid border-indigo-500'
								: 'text-xl font-normal text-gray-200'
						}
						onClick={() => setOpen(!open)}
					>
						Home
					</a>
				</Link>
				<Link href='/explore'>
					<a
						className={
							router.pathname == '/explore'
								? 'text-xl font-semibold text-gray-50 border-t border-solid border-indigo-500'
								: 'text-xl font-normal text-gray-200'
						}
						onClick={() => setOpen(!open)}
					>
						Explore
					</a>
				</Link>
				<Link href='/popular'>
					<a
						className={
							router.pathname == '/popular'
								? 'text-xl font-semibold text-gray-50 border-t border-solid border-indigo-500'
								: 'text-xl font-normal text-gray-200'
						}
						onClick={() => setOpen(!open)}
					>
						Popular
					</a>
				</Link>
				<Link href='/newest'>
					<a
						className={
							router.pathname == '/newest'
								? 'text-xl font-semibold text-gray-50 border-t border-solid border-indigo-500'
								: 'text-xl font-normal text-gray-200'
						}
						onClick={() => setOpen(!open)}
					>
						Newest
					</a>
				</Link>
			</nav>
		</div>
	);
}

export default MobileMenu;
