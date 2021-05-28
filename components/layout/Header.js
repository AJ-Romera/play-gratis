import Link from 'next/link';
import Menu from './Menu';
import Search from './Search';

function Header() {
	return (
		<header>
			<div className='container mx-auto py-4 px-6 max-w-full flex justify-between items-center border-b-2 border-solid border-gray-600 bg-gray-800'>
				<Link href='/'>
					<a className='text-3xl font-semibold italic text-gray-200 mr-8 uppercase'>
						Play
						<span className='text-3xl font-thin italic text-gray-300 uppercase'>
							gratis
						</span>
					</a>
				</Link>

				<Menu />

				<Search />
			</div>
		</header>
	);
}

export default Header;
