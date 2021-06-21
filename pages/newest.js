import { useState } from 'react';
import Card from '../components/ui/Card';
import Pagination from '../components/ui/Pagination';

function Newest({ newestGames }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [gamesPerPage] = useState(24);

	// Get current games
	const indexOfLastGame = currentPage * gamesPerPage;
	const indexOfFirstGame = indexOfLastGame - gamesPerPage;
	const currentGames = newestGames.slice(indexOfFirstGame, indexOfLastGame);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div>
			<div className='my-10 sm:grid gap-4 md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
				{currentGames.map((game) => (
					<Card key={game.id} game={game} />
				))}
			</div>
			<Pagination
				gamesPerPage={gamesPerPage}
				totalGames={newestGames.length}
				paginate={paginate}
				currentPage={currentPage}
				indexOfFirstGame={indexOfFirstGame}
				currentGames={currentGames}
			/>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		`https://www.freetogame.com/api/games?sort-by=release-date`
	);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { newestGames: data },
	};
}

export default Newest;
