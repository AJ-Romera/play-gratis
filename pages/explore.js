import { useState } from 'react';
import Card from '../components/ui/Card';
import Pagination from '../components/ui/Pagination';

function Explore({ games }) {
	/* const [posts, setPosts] = useState([]); */
	/* const [loading, setLoading] = useState(false); */
	const [currentPage, setCurrentPage] = useState(1);
	const [gamesPerPage] = useState(12);

	// Get current games
	const indexOfLastGame = currentPage * gamesPerPage;
	const indexOfFirstGame = indexOfLastGame - gamesPerPage;
	const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

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
				totalGames={games.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(`https://www.freetogame.com/api/games`);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { games: data },
	};
}

export default Explore;
