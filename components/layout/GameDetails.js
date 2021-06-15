import Aside from './Aside';
import MainSection from './MainSection';

function GameDetails({ game }) {
	return (
		<div className='grid grid-cols-4 gap-5'>
			<Aside game={game} />
			<MainSection game={game} />
		</div>
	);
}

export default GameDetails;
