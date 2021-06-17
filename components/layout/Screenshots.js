import { useState } from 'react';
import Image from 'next/image';

function Screenshots({ game }) {
	const [imageSrc, setImageSrc] = useState('');

	function toggleOverlay(e) {
		if (overlay.classList.contains('hidden')) {
			overlay.classList.replace('hidden', 'flex');
			let dirtySrcUrl = e.target.src;
			let cleanUrl1 = dirtySrcUrl.split('&')[0];
			let cleanUrl2 = cleanUrl1.replaceAll('%2F', '/');
			let cleanUrl3 = cleanUrl2.replaceAll('%3A', ':');
			let cleanUrl4 = cleanUrl3.replace(
				'http://localhost:3000/_next/image?url=',
				''
			);
			setImageSrc(cleanUrl4);
		} else {
			overlay.classList.replace('flex', 'hidden');
		}
	}

	return (
		<>
			<h3 className='font-medium text-2xl text-justify text-indigo-100 mt-12'>
				{game.title} Screenshots
			</h3>
			<hr className='mt-2 mb-3 border-t-1 border-solid border-gray-600' />
			<div className='flex'>
				{game.screenshots.map((shot) => (
					<div key={shot.id.toString()} className='p-1'>
						<Image
							id={shot.id}
							className='h-auto w-full object-cover object-center rounded-lg'
							src={shot.image}
							alt={`Screenshot of ${game.title} ${shot.id}`}
							width={700}
							height={400}
							onClick={(e) => toggleOverlay(e)}
						/>
					</div>
				))}
			</div>
			<div
				className='bg-black bg-opacity-50 fixed inset-0 hidden justify-center items-center'
				id='overlay'
			>
				{imageSrc ? (
					<>
						<div className='absolute top-7 right-7 z-50'>
							<svg
								className='h-7 w-7 cursor-pointer p-1 bg-white border-2 border-indigo-500 rounded-lg font-bold text-blue-500 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white transform hover:scale-125'
								id='close-modal'
								fill='currentColor'
								viewBox='0 0 20 20'
								onClick={(e) => toggleOverlay(e)}
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</div>
						<div className='max-w-5xl py-2 px-3'>
							<Image
								key={game.id}
								className='rounded shadow-xl'
								src={imageSrc}
								alt={`Screenshot of ${game.title}`}
								width={1000}
								height={600}
							/>
						</div>
					</>
				) : null}
			</div>
		</>
	);
}

export default Screenshots;
