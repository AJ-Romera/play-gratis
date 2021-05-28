import Link from 'next/link';

function Menu() {
	return (
		<nav className='pl-10'>
			<Link href='/'>
				<a className='text-xl font-normal text-gray-200'>Home</a>
			</Link>
			<Link href='/explore'>
				<a className='text-xl font-normal text-gray-200 pl-7'>
					Explore
				</a>
			</Link>
			<Link href='/popular'>
				<a className='text-xl font-normal text-gray-200 pl-7'>
					Popular
				</a>
			</Link>
			<Link href='/newest'>
				<a className='text-xl font-normal text-gray-200 pl-7 mr-0'>
					Newest
				</a>
			</Link>
		</nav>
	);
}

export default Menu;
