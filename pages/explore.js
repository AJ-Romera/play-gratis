import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';

function Explore({ games }) {
	{
		console.log(games);
	}
	return (
		<div className='bg-clouds-patter bg-fixed bg-no-repeat bg-cover'>
			<div className='bg-gray-900 bg-opacity-70'>
				<Layout title='Explore F2P Games'>
					<div className='px-5 my-10 gap-4 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
						{games.map((game) => (
							<Card key={game.id} game={game} />
						))}
					</div>
				</Layout>
			</div>
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
