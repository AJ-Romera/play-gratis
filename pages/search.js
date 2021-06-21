import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../components/ui/Card';
import Pagination from '../components/ui/Pagination';

function Search({ games }) {
	const router = useRouter();
	const {
		query: { q },
	} = router;

	const [result, setResult] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [gamesPerPage] = useState(24);

	// Get current games
	const indexOfLastGame = currentPage * gamesPerPage;
	const indexOfFirstGame = indexOfLastGame - gamesPerPage;
	const currentGames = result.slice(indexOfFirstGame, indexOfLastGame);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	useEffect(() => {
		const wordsToSearch = q.toLowerCase();

		const filter = games.filter((game) => {
			return (
				game.title.toLowerCase().includes(wordsToSearch) ||
				game.short_description.toLowerCase().includes(wordsToSearch)
			);
		});
		setResult(filter);
	}, [q, games]);

	return (
		<div>
			<div className='my-10 sm:grid gap-4 md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
				{currentGames.map((game) => (
					<Card key={game.id} game={game} />
				))}
			</div>
			<Pagination
				gamesPerPage={gamesPerPage}
				totalGames={result.length}
				paginate={paginate}
				currentPage={currentPage}
				indexOfFirstGame={indexOfFirstGame}
				currentGames={currentGames}
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

export default Search;
