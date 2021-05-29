import Link from 'next/link';

function Footer() {
	return (
		<footer>
			<div className='container mx-auto py-4 px-6 max-w-full flex justify-between items-center border-t-2 border-solid border-gray-600 bg-gray-800'>
				<div className='flex flex-col'>
					<span className='text-sm font-normal italic text-gray-500'>
						PlayGratis | All rights reserved &copy; 2021
					</span>
					<span className='text-sm font-normal italic text-gray-500'>
						All trademarks mentioned herein are the property of
						their respective owners
					</span>
				</div>
				<div className='flex flex-col border-solid border-gray-600'>
					<span className='text-sm font-normal text-gray-500'>
						Website made by{' '}
						<a
							className='text-sm font-semibold text-gray-100'
							href='https://github.com/AJ-Romera'
							target='_blank'
						>
							AJ-Romera
						</a>{' '}
						with love
					</span>
					<span className='text-sm font-normal text-gray-500'>
						API provided by{' '}
						<a
							className='text-sm font-semibold text-gray-100'
							href='https://www.freetogame.com/api-doc'
							target='_blank'
						>
							FreeToGame API
						</a>
					</span>
				</div>
				<Link href='/'>
					<a className='text-3xl font-semibold italic text-gray-500 mr-8 uppercase'>
						Play
						<span className='text-3xl font-thin italic text-gray-600 uppercase'>
							gratis
						</span>
					</a>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
