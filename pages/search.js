import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
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
		if (!q) {
			return;
		}

		const wordsToSearch = q.toLowerCase();

		const filter = games.filter((game) => {
			return (
				game.title.toLowerCase().includes(wordsToSearch) ||
				game.short_description.toLowerCase().includes(wordsToSearch)
			);
		});
		setResult(filter);
		setCurrentPage(1);
	}, [q, games]);

	return (
		<div>
			{result.length > 0 ? (
				<div className='my-10 sm:grid gap-4 md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
					{currentGames.map((game) => (
						<Card key={game.id} game={game} />
					))}
					<Pagination
						gamesPerPage={gamesPerPage}
						totalGames={result.length}
						paginate={paginate}
						currentPage={currentPage}
						indexOfFirstGame={indexOfFirstGame}
						currentGames={currentGames}
					/>
				</div>
			) : (
				<div className='flex flex-col justify-center items-center mx-auto max-w-5xl min-h-screen'>
					<div className='mb-4'>
						<Image
							src='https://cdn.pixabay.com/photo/2020/04/03/07/09/comic-speech-bubbles-4997671__340.png'
							alt='White Game Controller in a Blue Circle'
							width={400}
							height={300}
						/>
					</div>
					<span className='text-red-500 font-bold text-2xl md:text-3xl lg:text-5xl text-center mb-2'>
						Sorry, game not found. Try again!
					</span>
					<span className='text-red-400 text-xl md:text-2xl lg:text-3xl text-center'>
						You misspelled the title or we don't have it on our list
					</span>
				</div>
			)}
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
