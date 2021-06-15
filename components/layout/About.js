import { useState } from 'react';

function About({ game }) {
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
		<>
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
		</>
	);
}

export default About;
