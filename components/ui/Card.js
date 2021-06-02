import Image from 'next/image';

function Card({ game }) {
	return (
		<div className='min-h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
			<Image
				className='lg:h-72 md:h-48 w-full object-cover object-center'
				layout='responsive'
				src={game.thumbnail}
				alt={game.title}
				width={500}
				height={400}
			/>
			<div className='h-3/5 p-6 bg-gray-800 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
				<h2 className='text-base font-medium text-indigo-300 mb-1'>
					{game.developer}
				</h2>
				<h1 className='text-2xl font-semibold mb-3'>{game.title}</h1>
				<p className='leading-relaxed mb-3'>{game.short_description}</p>
				<div className='flex items-center flex-wrap '>
					<a className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>
						Read More
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
					<span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
						<svg
							className='w-4 h-4 mr-1'
							stroke='currentColor'
							strokeWidth='2'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
							viewBox='0 0 24 24'
						>
							<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
							<circle cx='12' cy='12' r='3'></circle>
						</svg>
						1.2K
					</span>
					<span className='text-gray-400 inline-flex items-center leading-none text-sm'>
						<svg
							className='w-4 h-4 mr-1'
							stroke='currentColor'
							strokeWidth='2'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
							viewBox='0 0 24 24'
						>
							<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
						</svg>
						6
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
