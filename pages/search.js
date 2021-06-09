import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';

function Search({ games }) {
	const router = useRouter();
	const {
		query: { q },
	} = router;

	const [result, setResult] = useState([]);

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
		<div className='px-5 my-10 gap-4 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
			{result.map((game) => (
				<Card key={game.id} game={game} />
			))}
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
