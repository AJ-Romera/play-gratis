function MinSystemRequirements({ game }) {
	return (
		<>
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
		</>
	);
}

export default MinSystemRequirements;
