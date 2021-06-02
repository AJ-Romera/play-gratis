import Image from 'next/image';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';

function Explore({ games }) {
	{
		console.log(games);
	}
	return (
		<div>
			<Layout title='Explore F2P Games'>
				<div className='px-5 my-10 gap-4 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
					{games.map((game) => (
						<Card
							className='min-h-full'
							key={game.id}
							game={game}
						/>
					))}
				</div>
			</Layout>
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
