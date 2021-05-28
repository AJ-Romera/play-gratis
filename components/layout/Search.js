function Search() {
	return (
		<div className='w-96 h-12 bg-gray-100 rounded-xl flex items-center p-5'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-5 text-gray-500'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
				/>
			</svg>
			<input
				className='flex-1 h-10 bg-gray-100 border-none outline-none text-lg pl-3'
				type='text'
				placeholder='Search a Game'
			/>
		</div>
	);
}

export default Search;
