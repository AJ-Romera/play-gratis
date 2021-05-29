import Link from 'next/link';
import { useRouter } from 'next/router';

function Menu() {
	const router = useRouter();

	return (
		<nav className='pl-10'>
			<Link href='/'>
				<a
					className={
						router.pathname == '/'
							? 'text-xl font-bold text-gray-50 border-t-2 border-solid border-white pt-1'
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
							? 'text-xl font-semibold text-gray-50 border-t-2 border-solid border-white pt-1 ml-7'
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
							? 'text-xl font-semibold text-gray-50 border-t-2 border-solid border-white pt-1 ml-7'
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
							? 'text-xl font-semibold text-gray-50 border-t-2 border-solid border-white pt-1 ml-7 mr-0'
							: 'text-xl font-normal text-gray-200 ml-7 mr-0'
					}
				>
					Newest
				</a>
			</Link>
		</nav>
	);
}

export default Menu;
