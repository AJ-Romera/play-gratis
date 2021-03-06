import Image from 'next/image';
import Link from 'next/link';

function Card({ game }) {
	return (
		<div className='h-full mb-3 border-2 border-solid border-gray-600 rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-900 hover:text-gray-100 hover:border-indigo-500 transition duration-300 ease-in'>
			<Link href='/game/[id]' as={`/game/${game.id}`}>
				<Image
					className='lg:h-72 md:h-48 w-full object-cover object-center cursor-pointer'
					layout='responsive'
					src={game.thumbnail}
					alt={game.title}
					width={700}
					height={400}
				/>
			</Link>
			<div className='p-6'>
				<Link href='/game/[id]' as={`/game/${game.id}`}>
					<h1 className='text-3xl font-semibold mb-3 text-indigo-100 cursor-pointer'>
						{game.title}
					</h1>
				</Link>
				<Link href='/game/[id]' as={`/game/${game.id}`}>
					<p className='text-gray-200 leading-relaxed mb-8 cursor-pointer'>
						{game.short_description}
					</p>
				</Link>
				<div className='flex items-center flex-wrap justify-between'>
					<a
						target='_blank'
						href={game.game_url}
						className='text-indigo-300 font-normal uppercase inline-flex items-center md:mb-2 lg:mb-0 p-1.5 mr-6 border-2 border-solid border-indigo-500 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer'
					>
						Play now
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
					<span className='text-indigo-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm font-normal p-1.5 border-2 border-solid border-indigo-500 rounded-lg'>
						{game.genre}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
