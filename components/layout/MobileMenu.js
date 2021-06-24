import Link from 'next/link';
import { useRouter } from 'next/router';

function MobileMenu() {
	const router = useRouter();

	return (
		<div className='pl-10 lg:hidden'>
			<svg
				className='h-8 w-8 hover:bg-indigo-500 hover:bg-opacity-40 hover:rounded'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z'
					fill='white'
				></path>
			</svg>
		</div>
		/* <nav className='pl-10 hidden lg:block'>
			<Link href='/'>
				<a
					className={
						router.pathname == '/'
							? 'text-xl font-semibold text-gray-50 border-t border-solid border-indigo-500 pt-1'
							: 'text-xl font-normal text-gray-200'
					}
				>
					Home
				</a>
			</Link>
			<Link href='/explore'>
				<a
					className={
						router.pathname == '/explore'
							? 'text-xl font-semibold text-gray-50 border-t border-solid border-indigo-500 pt-1 ml-7'
							: 'text-xl font-normal text-gray-200 ml-7'
					}
				>
					Explore
				</a>
			</Link>
			<Link href='/popular'>
				<a
					className={
						router.pathname == '/popular'
							? 'text-xl font-semibold text-gray-50 border-t border-solid border-indigo-500 pt-1 ml-7'
							: 'text-xl font-normal text-gray-200 ml-7'
					}
				>
					Popular
				</a>
			</Link>
			<Link href='/newest'>
				<a
					className={
						router.pathname == '/newest'
							? 'text-xl font-semibold text-gray-50 border-t border-solid border-indigo-500 pt-1 ml-7 mr-0'
							: 'text-xl font-normal text-gray-200 ml-7 mr-0'
					}
				>
					Newest
				</a>
			</Link>
		</nav> */
	);
}

export default MobileMenu;
