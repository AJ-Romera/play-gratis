import Image from 'next/image';

function Aside({ game }) {
	return (
		<aside className='col-span-1 mb-12'>
			<div className='md:sticky md:top-10'>
				<Image
					className='h-auto w-full object-cover object-center rounded-lg'
					layout='responsive'
					src={game.thumbnail}
					alt={game.title}
					width={700}
					height={400}
				/>

				<a
					target='_blank'
					href={game.game_url}
					className='flex items-center justify-center border-2 border-indigo-500 rounded-lg font-bold text-blue-500 uppercase px-4 py-3 mt-6 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white'
				>
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
			</div>
		</aside>
	);
}

export default Aside;
