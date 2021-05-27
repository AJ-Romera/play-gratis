import Link from 'next/link';
import Menu from './Menu';
import Search from './Search';

/* const Logo = styled.a`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`; */

function Header() {
	return (
		<header>
			<div className='container mx-auto py-4 px-6 max-w-full flex justify-between items-center border-b-2 border-solid border-gray-600 bg-gray-800'>
				<Link href='/'>
					<a className='text-4xl font-bold text-gray-200 tracking-wide mr-8 uppercase'>
						Playgratis
					</a>
				</Link>

				<Menu />

				<Search />
			</div>
		</header>
	);
}

export default Header;
