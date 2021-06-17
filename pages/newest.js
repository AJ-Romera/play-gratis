import Card from '../components/ui/Card';

function Newest({ newestGames }) {
	return (
		<div className='my-10 sm:grid gap-4 md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
			{newestGames.map((game) => (
				<Card key={game.id} game={game} />
			))}
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
