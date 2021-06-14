import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function GameDetails({ game }) {
	const [read, setRead] = useState('+ Read More');

	let descriptionArray = game.description.split('\r\n');

	function toggleDescription() {
		if (description.classList.contains('line-clamp-4')) {
			description.classList.replace('line-clamp-4', 'line-clamp-none');
			setRead('- Read Less');
		} else {
			description.classList.replace('line-clamp-none', 'line-clamp-4');
			setRead('+ Read More');
		}
	}

	return (
		<div className='grid grid-cols-4 gap-5'>
			<aside className='col-span-1'>
				<div className='sticky top-10'>
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
			<section className='col-span-3'>
				<h1 className='font-medium text-4xl text-justify text-indigo-100 mb-2'>
					{game.title}
				</h1>
				<h3 className='font-medium text-2xl text-justify text-indigo-100 mt-6 mb-2'>
					About {game.title}
				</h3>
				<hr className='mt-2 mb-3 border-t-1 border-solid border-gray-600' />
				<div>
					<div
						id='description'
						className='font-normal text-base text-gray-200 mt-0 mb-4 line-clamp-4'
					>
						{descriptionArray.map((paragraph) => (
							<p key={game.id.toString() + '-' + Math.random()}>
								{paragraph}
								<br></br>
							</p>
						))}
					</div>
					<a
						onClick={(e) => toggleDescription()}
						className='font-normal text-base text-gray-50 cursor-pointer'
					>
						{read}
					</a>
				</div>
				<h3 className='font-medium text-2xl text-justify text-indigo-100 mt-12'>
					Aditional Information
				</h3>
				<p className='flex flex-row items-center font-normal text-justify text-base text-gray-400 mb-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
							clipRule='evenodd'
						/>
					</svg>
					<span className='ml-2'>
						Please note this free-to-play game may or may not offer
						optional in-game purchases.
					</span>
				</p>
				<hr className='mb-3 border-t-1 border-solid border-gray-600' />
				<div className='grid grid-cols-2 gap-4'>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Title
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.title}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Release Date
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.release_date}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Developer
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.developer}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Publisher
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.publisher}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Genre
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.genre}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Platform
						</span>
						<span className='flex flex-row items-center font-normal text-justify text-base text-gray-200'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
								/>
							</svg>
							<span className='ml-2'>
								{game.platform} (Client)
							</span>
						</span>
					</div>
				</div>
				<h3 className='font-medium text-2xl text-justify text-indigo-100 mt-12'>
					{game.title} Screenshots
				</h3>

				{/* HERE THE SCREENSHOTS */}

				<h3 className='font-medium text-2xl text-justify text-indigo-100 mt-12 mb-2'>
					Minimum System Requirements{' '}
					<span className='font-normal text-xl text-gray-400'>
						(Windows)
					</span>
				</h3>
				<hr className='mb-3 border-t-1 border-solid border-gray-600' />
				<div className='grid grid-cols-2 gap-4 mb-8'>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							OS
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.minimum_system_requirements.os}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Processor
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.minimum_system_requirements.processor}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Memory
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.minimum_system_requirements.memory}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Graphics
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.minimum_system_requirements.graphics}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Storage
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							{game.minimum_system_requirements.storage}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-normal text-justify text-base text-gray-400'>
							Additional Notes
						</span>
						<span className='font-normal text-justify text-base text-gray-200'>
							Specifications may change during development
						</span>
					</div>
				</div>
				<hr className='mb-3 border-t-1 border-solid border-gray-600' />
				<p className='font-normal text-justify text-sm text-gray-400'>
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
