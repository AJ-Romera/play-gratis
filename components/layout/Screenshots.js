import Image from 'next/image';

function Screenshots({ game }) {
	return (
		<>
			<h3 className='font-medium text-2xl text-justify text-indigo-100 mt-12'>
				{game.title} Screenshots
			</h3>
			<hr className='mt-2 mb-3 border-t-1 border-solid border-gray-600' />
			<div className='flex'>
				{game.screenshots.map((shot) => (
					<div className='p-1'>
						<Image
							key={shot.id.toString()}
							className='h-auto w-full object-cover object-center rounded-lg'
							src={shot.image}
							alt={`Screenshot of ${game.title} ${shot.id}`}
							width={700}
							height={400}
						/>
					</div>
				))}
			</div>
		</>
	);
}

export default Screenshots;
