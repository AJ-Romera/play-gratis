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
			<section className='col-span-3 border-2 border-gray-200'>
				<p className='font-normal text-justify text-lg text-gray-200'>
					{game.title}
				</p>
				<p className='font-normal text-justify text-lg text-gray-200'>
					About {game.title}
				</p>
				<p className='font-normal text-justify text-lg text-gray-200'>
					{game.description}
				</p>
				<p className='font-normal text-justify text-lg text-gray-200'>
					Aditional Information
				</p>
				<p className='font-normal text-justify text-lg text-gray-200'>
					{/* i info icon HERE */} Please note this free-to-play game
					may or may not offer optional in-game purchases.
				</p>
				<div className='grid grid-cols-2 gap-4'>
					<div className='flex flex-col bg-white'>
						<span>Title</span>
						<span>{game.title}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Release Date</span>
						<span>{game.release_date}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Developer</span>
						<span>{game.developer}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Publisher</span>
						<span>{game.publisher}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Genre</span>
						<span>{game.genre}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Platform</span>
						<span>
							{/* ICONO DE WINDOWS AQUÍ */}
							{game.platform} (Client)
						</span>
					</div>
				</div>
				<p className='font-normal text-justify text-lg text-gray-200'>
					{game.title} Screenshots
				</p>
				{/* HERE THE SCREENSHOTS */}
				<h3 className='font-normal text-justify text-lg text-gray-200'>
					Minimum System Requirements <span>(Windows)</span>
				</h3>
				<div className='grid grid-cols-2 gap-4'>
					<div className='flex flex-col bg-white'>
						<span>OS</span>
						<span>{game.minimum_system_requirements.os}</span>
					</div>
					{/* C O N T I N U A  P O R  A Q U Í */}
					<div className='flex flex-col bg-white'>
						<span>Title</span>
						<span>{game.title}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Title</span>
						<span>{game.title}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Title</span>
						<span>{game.title}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Title</span>
						<span>{game.title}</span>
					</div>
					<div className='flex flex-col bg-white'>
						<span>Title</span>
						<span>{game.title}</span>
					</div>
				</div>
				<p className='font-normal text-justify text-lg text-gray-200'>
					All material on this page is copyrighted by{' '}
					<span>©{game.publisher}</span> and their respective
					licensors. All other trademarks are the property of their
					respective owners.
				</p>
			</section>
		</div>
	);
}

export default GameDetails;
