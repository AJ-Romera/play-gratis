import Aside from './Aside';
import MainSection from './MainSection';

function GameDetails({ game }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-4 md:gap-5'>
			<Aside game={game} />
			<MainSection game={game} />
		</div>
	);
}

export default GameDetails;
