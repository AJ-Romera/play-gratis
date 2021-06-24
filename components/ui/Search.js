import React, { useState } from 'react';
import Router from 'next/router';

function Search({ open, setOpen }) {
	const [wordsToSearch, setWordsToSearch] = useState('');

	const searchGame = (e) => {
		e.preventDefault();

		if (wordsToSearch.trim() === '') return;

		// redirect to /search
		Router.push({
			pathname: '/search',
			query: { q: wordsToSearch },
		});

		e.target.reset();
		setOpen(false);
	};

	return (
		<form
			className={
				open
					? 'h-10 bg-gray-100 rounded-xl items-center p-5 flex'
					: 'w-3/6 h-10 bg-gray-100 rounded-xl items-center p-5 hidden md:flex md:mr-0'
			}
			onSubmit={searchGame}
		>
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
				onChange={(e) => setWordsToSearch(e.target.value)}
			/>
		</form>
	);
}

export default Search;
