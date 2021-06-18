function Pagination({ gamesPerPage, totalGames, paginate, currentPage }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='bg-gray-800 px-4 py-3 flex items-center justify-between mb-4 border-t border-gray-200 rounded sm:px-6'>
			<div className='flex-1 flex justify-between sm:hidden'>
				<a
					href='#'
					className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
				>
					Previous
				</a>
				<a
					href='#'
					className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
				>
					Next
				</a>
			</div>
			<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
				<div>
					<p className='text-sm text-gray-700'>
						Showing <span className='font-medium'>1</span> to{' '}
						<span className='font-medium'>10</span> of{' '}
						<span className='font-medium'>555</span> results
					</p>
				</div>
				<div>
					<nav
						className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
						aria-label='Pagination'
					>
						{/* {currentPage >= 2 && ( */}
						<a
							href='#'
							className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
							onClick={() => paginate(currentPage - 1)}
						>
							<span className='sr-only'>Previous</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								aria-hidden='true'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
						{/* )} */}

						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

						{currentPage >= 3 && (
							<a
								href={'#'}
								className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
								onClick={() => paginate(currentPage - 2)}
							>
								{currentPage - 2}
							</a>
						)}
						{currentPage >= 2 && (
							<a
								href={'#'}
								className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
								onClick={() => paginate(currentPage - 1)}
							>
								{currentPage - 1}
							</a>
						)}
						<span className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
							{currentPage}
						</span>
						{currentPage <= pageNumbers.length - 1 && (
							<a
								href={'#'}
								className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
								onClick={() => paginate(currentPage + 1)}
							>
								{currentPage + 1}
							</a>
						)}
						{currentPage <= pageNumbers.length - 2 && (
							<a
								href={'#'}
								className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
								onClick={() => paginate(currentPage + 2)}
							>
								{currentPage + 2}
							</a>
						)}

						{/* <span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'>
							...
						</span> */}

						{currentPage <= pageNumbers.length - 1 && (
							<a
								href='#'
								className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
								onClick={() => paginate(currentPage + 1)}
							>
								<span className='sr-only'>Next</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									aria-hidden='true'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</a>
						)}
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Pagination;
