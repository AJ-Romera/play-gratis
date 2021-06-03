import Image from 'next/image';

function Card({ game }) {
	return (
		<div className='min-h-full  border-2 border-solid border-gray-600 rounded-lg overflow-hidden'>
			<Image
				className='lg:h-72 md:h-48 w-full object-cover object-center'
				layout='responsive'
				src={game.thumbnail}
				alt={game.title}
				width={700}
				height={400}
			/>
			<div className='h-3/4 p-6 text-gray-200 bg-gray-800 hover:bg-gray-900 hover:text-gray-100 transition duration-300 ease-in'>
				<h2 className='text-base font-medium text-indigo-300 mb-1'>
					{game.developer}
				</h2>
				<h1 className='text-2xl font-semibold mb-3'>{game.title}</h1>
				<p className='leading-relaxed mb-3'>{game.short_description}</p>
				<div className='flex items-center flex-wrap '>
					<a className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>
						PLAY NOW
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
					<span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm p-2 border-2 border-gray-200'>
						{game.genre}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
