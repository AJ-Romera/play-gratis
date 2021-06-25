import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Search from '../ui/Search';

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
				{open ? (
					<svg
						className='h-8 w-8 hover:bg-indigo-500 hover:bg-opacity-70 hover:p-0.5 hover:rounded'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.9998 22C7.95337 22.0024 4.30431 19.5659 2.75548 15.8276C1.20665 12.0893 2.06336 7.78606 4.92581 4.92598C7.45311 2.39868 11.1367 1.41166 14.5891 2.33672C18.0414 3.26177 20.738 5.95836 21.6631 9.41072C22.5881 12.8631 21.6011 16.5467 19.0738 19.074C17.2013 20.955 14.654 22.0086 11.9998 22ZM3.99981 12.172C4.04713 16.5732 7.64092 20.1095 12.0424 20.086C16.4438 20.0622 19.9994 16.4875 19.9994 12.086C19.9994 7.68449 16.4438 4.10975 12.0424 4.08598C7.64092 4.06244 4.04713 7.59874 3.99981 12V12.172ZM9.40881 16L7.99981 14.59L10.5898 12L7.99981 9.40998L9.40981 7.99998L11.9998 10.59L14.5898 7.99998L15.9998 9.40998L13.4098 12L15.9998 14.59L14.5908 16L11.9998 13.41L9.40981 16H9.40881Z'
							fill='white'
						></path>
					</svg>
				) : (
					<svg
						className='h-8 w-8 hover:bg-indigo-500 hover:bg-opacity-70 hover:p-0.5 hover:rounded'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z'
							fill='white'
						></path>
					</svg>
				)}
			</button>
			<nav
				className={
					open
						? 'fixed inset-0 sm:left-1/2 bg-gray-900 sm:border-l-2 sm:border-indigo-600 flex flex-col justify-around items-center p-10 z-10'
						: 'hidden'
				}
			>
				<div>
					<Search open={open} setOpen={setOpen} />
				</div>
				<Link href='/'>
					<a
						className={
							router.pathname == '/'
								? 'text-4xl font-bold text-gray-50'
								: 'text-3xl font-normal text-gray-200'
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
								? 'text-4xl font-bold text-gray-50'
								: 'text-3xl font-normal text-gray-200'
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
								? 'text-4xl font-bold text-gray-50'
								: 'text-3xl font-normal text-gray-200'
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
								? 'text-4xl font-bold text-gray-50'
								: 'text-3xl font-normal text-gray-200'
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
