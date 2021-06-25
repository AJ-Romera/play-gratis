import Aside from './Aside';
import MainSection from './MainSection';

function GameDetails({ game }) {
	return (
		<div className='flex flex-col md:grid md:grid-cols-4 md:gap-5'>
			<Aside game={game} />
			<MainSection game={game} />
		</div>
	);
}

export default GameDetails;
