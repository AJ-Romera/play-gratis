import Image from 'next/image';
import Link from 'next/link';

function GameDetails({ game }) {
	return (
		<div className='grid grid-cols-4 gap-4'>
			<aside className='col-span-1'>
				<div className='flex flex-col'>
					<Image
						className='h-auto w-full object-cover object-center'
						layout='responsive'
						src={game.thumbnail}
						alt={game.title}
						width={700}
						height={400}
					/>

					<Link href='/explore'>
						<a className='flex items-center justify-center border-2 border-indigo-500 rounded-lg font-bold text-blue-500 uppercase px-4 py-3 mt-6 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white'>
							Play Now
							<svg
								className='w-4 h-4 ml-2'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M5 12h14'></path>
								<path d='M12 5l7 7-7 7'></path>
							</svg>
						</a>
					</Link>
				</div>
			</aside>
			<div className='bg-gray-900 col-span-3 border-2 border-gray-200'>
				<p>TITLE</p>
				<p>ABOUT - DESCRIPTION + READ MORE</p>
				<p>ADITIONAL INFORMATION</p>
				<p>SCREENSHOTS</p>
				<p>TITLE</p>
			</div>
		</div>
	);
}

export default GameDetails;
