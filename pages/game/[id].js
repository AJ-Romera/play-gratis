import GameDetails from '../../components/layout/GameDetails';

function Game({ game }) {
	console.log(game);
	return <GameDetails game={game} />;
}

export async function getStaticPaths() {
	const res = await fetch('https://www.freetogame.com/api/games');
	const data = await res.json();

	const paths = data.map((game) => {
		return {
			params: { id: game.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const id = context.params.id;
	const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { game: data },
	};
}

export default Game;
