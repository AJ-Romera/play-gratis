function GameDetails({ game }) {
	return (
		<div className='grid grid-cols-4 gap-2'>
			<aside className='bg-indigo-600 border-2 border-gray-200'>
				<p>IMAGE/THUMBNAIL</p>
				<p>PLAY NOW</p>
			</aside>
			<div className='bg-gray-900 col-span-3 border-2 border-gray-200'>
				<p>TITLE</p>
				<p>ABOUT - DESCRIPTION + READ MORE</p>
				<p>ADITIONAL INFORMATION</p>
				<p>SCREENSHOTS</p>
				<p>TITLE</p>
			</div>
		</div>
	);
}

export default GameDetails;
