import Link from 'next/link';

function Footer() {
	return (
		<footer>
			<div className='container mx-auto py-4 px-6 max-w-full flex justify-between items-center border-t-2 border-solid border-gray-600 bg-gray-800'>
				<Link href='/'>
					<a className='text-3xl font-semibold italic text-gray-200 mr-8 uppercase'>
						Play
						<span className='text-3xl font-thin italic text-gray-300 uppercase'>
							gratis
						</span>
					</a>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
