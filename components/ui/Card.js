function Card({ game }) {
	return (
		<div className='p-2 border border-solid border-white'>
			<p className='truncate max-w-md'>{game.developer}</p>
			<h2 className='mt-1 text-2xl text-white transition-all-duration-100 ease-in-out group-hover:font-bold'>
				{game.title}
			</h2>
			<p className='flex items-center opacity-0 group-hover:opacity-100'>
				{game.desc}
			</p>
		</div>
	);
}

export default Card;
