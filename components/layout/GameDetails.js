import Image from 'next/image';

function GameDetails({ game }) {
	return (
		<div className='h-full mb-3 border-2 border-solid border-gray-600 rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-900 hover:text-gray-100 hover:border-indigo-500 transition duration-300 ease-in cursor-pointer'>
			<Image
				className='lg:h-72 md:h-48 w-full object-cover object-center'
				layout='responsive'
				src={game.thumbnail}
				alt={game.title}
				width={700}
				height={400}
			/>
			<div className='p-6 text-gray-200'>
				<h1 className='text-3xl font-semibold mb-3 text-indigo-100'>
					{game.title}
				</h1>
				<p className='leading-relaxed mb-8'>{game.description}</p>
			</div>
		</div>
	);
}

export default GameDetails;
