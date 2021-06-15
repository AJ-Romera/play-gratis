function AditionalInfo({ game }) {
	return (
		<>
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
						<span className='ml-2'>{game.platform} (Client)</span>
					</span>
				</div>
			</div>
		</>
	);
}

export default AditionalInfo;
