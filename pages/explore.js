import Image from 'next/image';
import Layout from '../components/layout/Layout';

function Explore({ games }) {
	return (
		<div>
			<Layout title='Explore F2P Games'>
				<h1 className='text-5xl font-bold text-gray-200'>
					List of Games:
				</h1>
				{console.log(games)}
				<ul className='text-3xl font-semibold text-gray-200'>
					{games.map((game) => (
						<li key={game.id}>
							<Image
								src={game.thumbnail}
								alt='sdgsdfgdsfg'
								width={450}
								height={300}
							/>
							<h2>{game.title}</h2>
						</li>
					))}
				</ul>
			</Layout>
		</div>
	);
}

export async function getStaticProps(context) {
	const res = await fetch(`https://www.freetogame.com/api/games`);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { games: data }, // will be passed to the page component as props
	};
}

export default Explore;
