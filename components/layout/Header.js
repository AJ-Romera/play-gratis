import Link from 'next/link';
import Menu from './Menu';
import Search from './Search';

function Header() {
	return (
		<header>
			{/* <p className='text-xl font-normal text-gray-200'>From header</p> */}
			<Link href='/'>
				<a className='text-xl font-normal text-gray-200'>PLAYGRATIS</a>
			</Link>
			<Menu />
			<Search />
		</header>
	);
}

export default Header;
